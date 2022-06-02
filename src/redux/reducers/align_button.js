import { SET_ALIGN_BUTTON } from "../constant/action_type";
const align_button_reducer = (state = [], action) => {
  if (action.type === SET_ALIGN_BUTTON) {
    return action.payload;
  } else {
    return state;
  }
};

export default align_button_reducer;
