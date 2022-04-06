import { SET_SIDE } from "../constant/action_type";
const side_reducer = (state = [], action) => {
  if (action.type === SET_SIDE) {
    return action.payload;
  } else {
    return state;
  }
};

export default side_reducer;
