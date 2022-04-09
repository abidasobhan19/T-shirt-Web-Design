import { SET_IMAGE } from "../constant/action_type";

export const setImage = (shirtimage) => {
  return {
    type: SET_IMAGE,
    payload: shirtimage,
  };
};

export const setShirtImage = (shirtimage) => {
  return (dispatch) => {
    return dispatch(setImage(shirtimage));
  };
};
