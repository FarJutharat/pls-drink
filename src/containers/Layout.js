import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import PropTypes from "prop-types";
import { defaultStyle } from "../styles/default";

export default function Layout({ children, barStyle }) {
  return (
    <View style={{ ...defaultStyle.container }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 20}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {children}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <StatusBar barStyle={barStyle || "default"} />
    </View>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  barStyle: PropTypes.oneOf(["light-content", "default", "dark-content"]),
};
