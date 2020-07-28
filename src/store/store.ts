import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import rootReducer, { RootState } from "./rootReducer";
import { useDispatch } from "react-redux";

let middleware = [...getDefaultMiddleware()];

if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  middleware.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
