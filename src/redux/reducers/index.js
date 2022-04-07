import { combineReducers } from "redux";

import side_reducer from "./side_reducer";
import color_reducer from "./color_reducer";
const reducers = combineReducers({
  Shirt_side: side_reducer,
  Color: color_reducer,
});

export default reducers;
