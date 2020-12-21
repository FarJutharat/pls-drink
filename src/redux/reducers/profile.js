import { RESET_PROFILE, SET_PROFILE } from "../actions/profile";

const initialState = {
  gender: null,
  weight: null,
  timeStamp: null,
  wakeUpTime: 1,
  isLoggedIn: false,
};
export default profile = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROFILE:
      return {
        ...state,
        ...payload,
        isLoggedIn: true,
      };
    case RESET_PROFILE:
      return initialState;
    default:
      return state;
  }
};
