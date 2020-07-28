import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  r: state => 1
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
