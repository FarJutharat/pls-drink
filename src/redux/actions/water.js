import { AsyncStorage } from "react-native";
import { STORAGE } from "../../constants/type";
import {
  getPercentageOfWaterDaily,
  subtractWaterRemain,
} from "../../utils/water";

export const SET_WATER = "SET_WATER";
export const RESET_WATER = "RESET_WATER";
export const SUBTRACT_WATER_REMAIN = "SUBTRACT_WATER_REMAIN";

export const setWater = (payload, type = "") => (dispatch) => {
  if (type === STORAGE)
    return dispatch({
      type: SET_WATER,
      payload,
    });
  else
    AsyncStorage.setItem("water", JSON.stringify(payload)).then(() =>
      dispatch({
        type: SET_WATER,
        payload,
      })
    );
};

export const subtractWater = (payload) => (dispatch) => {
  AsyncStorage.setItem(
    "water",
    JSON.stringify({
      waterIntakePerDay: payload.waterIntakePerDay,
      waterRemain: subtractWaterRemain(
        payload.waterRemain,
        payload.waterPerCup
      ),
      percentage: getPercentageOfWaterDaily(
        payload.waterIntakePerDay,
        payload.percentage,
        payload.waterPerCup
      ),
    })
  ).then(() =>
    dispatch({
      type: SUBTRACT_WATER_REMAIN,
      payload,
    })
  );
};

export const resetWater = () => (dispatch) => {
  return dispatch({
    type: RESET_WATER,
  });
};
