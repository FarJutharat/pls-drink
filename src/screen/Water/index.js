import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import Layout from "../../containers/Layout";
import { waterStyle } from "../../styles/water";
import WButton from "../../components/Button";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { subtractWater } from "../../redux/actions/water";
import { waterPerCup } from "../../constants/water";

export default function WaterScreen({ navigation }) {
  const water = useSelector((state) => state.water);
  const dispatch = useDispatch();

  const onDrinkWater = () => {
    dispatch(
      subtractWater({
        ...water,
        waterPerCup,
      })
    );
    navigation.navigate("Summary");
  };

  return (
    <Layout>
      <View style={waterStyle.container}>
        <Text style={waterStyle.timeTitle}>{dayjs().format("HH:mm")}</Text>
        <Image
          source={require("../../../assets/images/glass.png")}
          style={waterStyle.glassImage}
        />
        <Text style={waterStyle.subWaterTitle}>
          {waterPerCup * 1000} ml / 1 cup
        </Text>
        <View style={waterStyle.buttonContainer}>
          <WButton
            title="Drink"
            buttonStyle={waterStyle.drinkButton}
            textStyle={{ color: "#fff" }}
            onPress={onDrinkWater}
          />
          <WButton
            title="Cancel"
            buttonStyle={waterStyle.cancelButton}
            onPress={() => navigation.navigate("Summary")}
          />
        </View>
      </View>
    </Layout>
  );
}

WaterScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
