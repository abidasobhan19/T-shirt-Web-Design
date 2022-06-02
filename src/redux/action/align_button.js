import { SET_ALIGN_BUTTON } from "../constant/action_type";

export const setAlignButtonData = (AlignData) => {
  return {
    type: SET_ALIGN_BUTTON,
    payload: AlignData,
  };
};

export const setAlignButtonDyncData = (AlignData) => {
  return (dispatch) => {
    return dispatch(setAlignButtonData(AlignData));
  };
};
