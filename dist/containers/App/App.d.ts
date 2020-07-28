import React from "react";
import { AppConfig } from "config";
export declare const RootAsync: React.LazyExoticComponent<({ appConfig }: {
    appConfig: AppConfig;
}) => JSX.Element>;
export declare const SignInAsync: React.LazyExoticComponent<() => JSX.Element>;
declare const App: ({ appConfig }: {
    appConfig: AppConfig;
}) => JSX.Element;
export default App;
