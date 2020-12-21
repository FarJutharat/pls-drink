import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Layout from "../../containers/Layout";
import { defaultStyle } from "../../styles/default";
import { homeStyle } from "../../styles/home";
import WButton from "../../components/Button";


export default function HomeScreen({ navigation }) {
  return (
    <Layout barStyle={"dark-content"}>
      <View style={homeStyle.container}>
        <Text
          style={{
            ...defaultStyle.brandTitle,
            ...defaultStyle.italic,
            ...defaultStyle.primaryColor,
          }}
        >
          Please Drinks
        </Text>
        <WButton
          onPress={() => navigation.navigate("Profile")}
          title="Tap to Start"
        />
      </View>
    </Layout>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
