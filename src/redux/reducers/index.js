import { combineReducers } from "redux";

import side_reducer from "./side_reducer";

const reducers = combineReducers({
  
  Shirt_side : side_reducer,
  
});

export default reducers;
