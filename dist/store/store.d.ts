import { Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./rootReducer";
declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    r: number;
}>, import("redux").AnyAction, (import("redux").Middleware<{}, any, import("redux").Dispatch<import("redux").AnyAction>> | import("redux-thunk").ThunkMiddleware<any, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<any, import("redux").AnyAction, undefined>)[]>;
export declare type AppDispatch = typeof store.dispatch;
export declare type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<any, null, import("redux").AnyAction> & import("redux-thunk").ThunkDispatch<any, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export default store;
