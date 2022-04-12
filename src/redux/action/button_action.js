import { SET_BUTTON } from "../constant/action_type";

export const setButtonData = (DynamicData) => {
  return {
    type: SET_BUTTON,
    payload: DynamicData,
  };
};

export const setButtonDyncData= (DynamicData) => {
  return (dispatch) => {
    return dispatch(setButtonData(DynamicData));
  };
};


