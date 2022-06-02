import { SET_SCALE } from "../constant/action_type";
const scale_reducer = (state = [], action) => {
  if (action.type === SET_SCALE) {
    return action.payload;
  } else {
    return state;
  }
};

export default scale_reducer;
