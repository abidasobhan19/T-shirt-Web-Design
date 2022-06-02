import { combineReducers } from "redux";

import side_reducer from "./side_reducer";
import color_reducer from "./color_reducer";
import image_reducer from "./image_reducer";
import button_reducer from "./button_reducer";
import align_button_reducer from "./align_button";
import scale_reducer from "./scale_reducer";
const reducers = combineReducers({
  Shirt_side: side_reducer,
  Color: color_reducer,
  image: image_reducer,
  dynamicValue: button_reducer,
  align_value: align_button_reducer,
  scale_value: scale_reducer,
});

export default reducers;
