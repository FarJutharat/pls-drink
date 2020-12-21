import React, { useState, useEffect, useRef } from "react";
import { AppLoading } from "expo";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Navigation from "./src/navigation";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { AsyncStorage, LogBox } from "react-native";
import { resetWater, setWater } from "./src/redux/actions/water";
import { setProfileToStore } from "./src/redux/actions/profile";
import { STORAGE } from "./src/constants/type";

require("dayjs/locale/th");
dayjs.locale("th");

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    if (!isReady) {
      Font.loadAsync({
        ...Ionicons.font,
      })
        .then(getDataFromStorage)
        .then((data) => {
          if (data.profile)
            store.dispatch(setProfileToStore(data.profile, STORAGE));
          if (data.water) {
            if (dayjs().isAfter(data.profile.timeStamp))
              store.dispatch(resetWater());
            else store.dispatch(setWater(data.water, STORAGE));
          }

          registerForPushNotificationsAsync();
          setReady(true);
        });
    }
  }, []);

  LogBox.ignoreAllLogs(true);

  return isReady ? (
    <Provider store={store}>
      <Navigation />
    </Provider>
  ) : (
    <AppLoading />
  );
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

async function getDataFromStorage() {
  return {
    profile: JSON.parse(await AsyncStorage.getItem("profile")),
    water: JSON.parse(await AsyncStorage.getItem("water")),
  };
}
