import { SET_IMAGE } from "../constant/action_type";
const image_reducer = (state = [], action) => {
  if (action.type === SET_IMAGE) {
    return action.payload;
  } else {
    return state;
  }
};

export default image_reducer;
