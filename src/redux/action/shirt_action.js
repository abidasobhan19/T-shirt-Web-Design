// import axios from "axios";
// import { GET_DEVICE_URL } from "../../utils/url";
import { SET_SIDE } from "../constant/action_type";

export const setTshirt = (shirt) => {
  return {
    type: SET_SIDE,
    payload: shirt,
  };
};

export const setSideData = (shirt) => {
  return (dispatch) => {
    return dispatch(setTshirt(shirt));
  };
};
