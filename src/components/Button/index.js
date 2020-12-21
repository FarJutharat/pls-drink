import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { Button } from "native-base";
import { defaultStyle } from "../../styles/default";

export default function WButton({
  onPress,
  title,
  buttonStyle,
  textStyle,
  disabled,
}) {
  return (
    <Button
      style={{ ...defaultStyle.button, ...buttonStyle }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ ...defaultStyle.textButton, ...textStyle }}>{title}</Text>
    </Button>
  );
}

WButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  buttonStyle: PropTypes.shape(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
  ),
  textStyle: PropTypes.shape(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
  ),
  disabled: PropTypes.bool,
};
