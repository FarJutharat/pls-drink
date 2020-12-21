import {
  getPercentageOfWaterDaily,
  subtractWaterRemain,
} from "../../utils/water";
import {
  RESET_WATER,
  SET_WATER,
  SUBTRACT_WATER_REMAIN,
} from "../actions/water";

const initialState = {
  percentage: 0,
  waterIntakePerDay: 0,
  waterRemain: 0,
};
export default water = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_WATER:
      return {
        ...state,
        ...payload,
      };
    case SUBTRACT_WATER_REMAIN:
      return {
        ...state,
        waterRemain: subtractWaterRemain(
          state.waterRemain,
          payload.waterPerCup
        ),
        percentage: getPercentageOfWaterDaily(
          state.waterIntakePerDay,
          state.percentage,
          payload.waterPerCup
        ),
      };
    case RESET_WATER:
      return initialState;
    default:
      return state;
  }
};
