declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    r: number;
}>, import("redux").AnyAction>;
export declare type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
