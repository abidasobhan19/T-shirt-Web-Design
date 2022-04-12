import { combineReducers } from "redux";

import side_reducer from "./side_reducer";
import color_reducer from "./color_reducer";
import image_reducer from "./image_reducer";
import button_reducer from "./button_reducer";
const reducers = combineReducers({
  Shirt_side: side_reducer,
  Color: color_reducer,
  image:image_reducer,
  dynamicValue:button_reducer
});

export default reducers;
