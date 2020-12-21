import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { optionNavigationStyle } from "../styles/navigation";
import HomeScreen from "../screen/Home";
import ProfileScreen from "../screen/Profile";
import SummaryScreen from "../screen/Summary";
import WaterScreen from "../screen/Water";
import HistoryScreen from "../screen/History"
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  const { profile } = useSelector((state) => state);
  return (
    <Stack.Navigator initialRouteName={profile.isLoggedIn ? "Summary" : "Home"}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          ...optionNavigationStyle,
          title: "Set Profile",
          gestureEnabled: false,
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="Summary"
        component={SummaryScreen}
        options={{
          ...optionNavigationStyle,
          title: "Summary",
          gestureEnabled: false,
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="Water"
        component={WaterScreen}
        options={{
          ...optionNavigationStyle,
          title: "Water Schedule",
          gestureEnabled: false,
          headerLeft: null,
        }}
      />
      <Stack.Screen
      name="History"
      component={HistoryScreen}
      option={{
        ...optionNavigationStyle,
        title: "Water Intake History",
        gestureEnabled: false,
        headerLeft: null,
      }}
      />
    </Stack.Navigator>
  );
}
