import { SET_BUTTON } from "../constant/action_type";
const button_reducer = (state = [], action) => {
  if (action.type === SET_BUTTON) {
    return action.payload;
  } else {
    return state;
  }
};

export default button_reducer;
