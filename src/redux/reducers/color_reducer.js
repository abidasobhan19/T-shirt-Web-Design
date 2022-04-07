import { SET_COLOR } from "../constant/action_type";
const color_reducer = (state = [], action) => {
  if (action.type === SET_COLOR) {
    return action.payload;
  } else {
    return state;
  }
};

export default color_reducer;
