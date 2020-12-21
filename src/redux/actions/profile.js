import { AsyncStorage } from "react-native";
import { STORAGE } from "../../constants/type";

export const SET_PROFILE = "SET_PROFILE";
export const RESET_PROFILE = "RESET_PROFILE";

export const setProfileToStore = (payload, type = "") => (dispatch) => {
  if (type === STORAGE)
    return dispatch({
      type: SET_PROFILE,
      payload,
    });
  else
    AsyncStorage.setItem("profile", JSON.stringify(payload)).then(() =>
      dispatch({
        type: SET_PROFILE,
        payload,
      })
    );
};

export const resetProfile = () => (dispatch) => {
  return dispatch({
    type: RESET_PROFILE,
  });
};
