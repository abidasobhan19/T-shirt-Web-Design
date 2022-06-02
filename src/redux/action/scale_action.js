import { SET_SCALE } from "../constant/action_type";

export const setScaleData = (scaleData) => {
  return {
    type: SET_SCALE,
    payload: scaleData,
  };
};

export const setScaleDyncData = (ttttt) => {
  return (dispatch) => {
    return dispatch(setScaleData(ttttt));
  };
};
