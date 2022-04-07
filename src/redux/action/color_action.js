import { SET_COLOR } from "../constant/action_type";

export const setColor = (shirtcolor) => {
  return {
    type: SET_COLOR,
    payload: shirtcolor,
  };
};

export const setShirtColor = (shirtColor) => {
  return (dispatch) => {
    return dispatch(setColor(shirtColor));
  };
};
