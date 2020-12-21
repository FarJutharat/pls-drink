import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Layout from "../../containers/Layout";
import { profileStyle } from "../../styles/profile";
import WButton from "../../components/Button";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from "dayjs";
import { Button } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { setProfileToStore } from "../../redux/actions/profile";
import { isButtonDisabled } from "../../utils/validation";
import { setWater } from "../../redux/actions/water";
import * as Notifications from "expo-notifications";
import { calWaterIntake } from "../../utils/water";
import { notificationScheduleTime } from "../../constants/time";

const genderImages = [
  {
    type: "male",
    source: require("../../../assets/images/gender/male.png"),
  },
  {
    type: "female",
    source: require("../../../assets/images/gender/female.png"),
  },
];

export default function ProfileScreen({ navigation }) {
  const profileStore = useSelector((state) => state.profile);
  const waterStore = useSelector((state) => state.water);
  const dispatch = useDispatch();

  const [profile, setProfile] = useState({
    gender: profileStore.gender,
    weight: profileStore.weight,
    wakeUpTime: profileStore.wakeUpTime,
  });
  const [timePickerShow, setTimePickerShow] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  function handleChange(value, name) {
    setProfile({
      ...profile,
      [name]: value,
    });
  }

  function toggleTimePicker() {
    setTimePickerShow(!timePickerShow);
  }

  async function onSubmitProfile() {
    const waterIntakePerDay = calWaterIntake(profile.gender, profile.weight);
    dispatch(
      setProfileToStore({
        ...profile,
        timeStamp: dayjs(),
      })
    );
    dispatch(
      setWater({
        percentage: 0,
        waterIntakePerDay,
        waterRemain: waterIntakePerDay,
      })
    );
    await schedulePushNotification();
    navigation.navigate("Summary");
  }

  async function schedulePushNotification() {
    console.log("Water ", waterStore, profileStore);
    if (profileStore.isLoggedIn && waterStore.percentage < 100) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: `Please Drink at ${dayjs().format("HH:mm")}`,
          body: "Remember to drink water!",
          sound: "../../../assets/ringtone/notification.mp3",
        },
        trigger:{
          seconds : notificationScheduleTime,
          repeats : waterStore.percentage <= 100,
        },
      });
    }
  }

  useEffect(() => {
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      () => {
        navigation.navigate("Water");
      }
    );
    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return (
    <Layout barStyle={"light-content"}>
      <View style={profileStyle.container}>
        <View style={profileStyle.section}>
          <Text style={profileStyle.labelFormText}>Choose Gender</Text>
          <View style={profileStyle.genderImageSection}>
            {genderImages.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleChange(item.type, "gender")}
              >
                <View
                  style={{
                    padding: 20,
                    marginHorizontal: 5,
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor:
                      item.type === profile.gender ? "#0f4c75" : "transparent",
                  }}
                >
                  <Image
                    style={profileStyle.genderImage}
                    source={item.source}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={profileStyle.section}>
          <Text style={profileStyle.labelFormText}>Input Weight</Text>
          <TextInput
            style={profileStyle.textInput}
            keyboardType="number-pad"
            onChangeText={(text) => handleChange(text, "weight")}
            value={profile.weight}
          />
        </View>
        <View style={profileStyle.section}>
          <Text style={profileStyle.labelFormText}>
            What time do you wake up?
          </Text>
          <Button
            onPress={toggleTimePicker}
            style={{
              ...profileStyle.textInput,
              width: "100%",
              backgroundColor: "transparent",
            }}
          >
            <Text>{dayjs(profile.wakeUpTime).format("HH:mm")}</Text>
          </Button>
        </View>
        <WButton
          buttonStyle={isButtonDisabled(profile) && { opacity: 0.3 }}
          textStyle={isButtonDisabled(profile) && { opacity: 0.3 }}
          disabled={isButtonDisabled(profile)}
          onPress={onSubmitProfile}
          title={"Next"}
        />
      </View>
      <DateTimePickerModal
        isDarkModeEnabled={false}
        isVisible={Boolean(timePickerShow)}
        mode={"time"}
        onConfirm={(value) => {
          handleChange(value, "wakeUpTime");
          toggleTimePicker();
        }}
        onCancel={toggleTimePicker}
      />
    </Layout>
  );
}

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
