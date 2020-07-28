import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
declare const isAnalyticsEnabled: () => boolean;
declare const setAnalyticsEnabled: (trackingID: string, enabled: boolean) => void;
export declare type AnalyticsProps = {
    trackingID: string;
};
declare class Analytics extends Component<AnalyticsProps & RouteComponentProps, {
    showPrompt: boolean;
}> {
    static count: number;
    state: {
        showPrompt: boolean;
    };
    componentDidMount(): void;
    runAnalytics: () => void;
    handleAccept: () => void;
    handleClose: () => void;
    Prompt: JSX.Element;
    render(): null;
}
export { isAnalyticsEnabled, setAnalyticsEnabled };
declare const _default: React.ComponentClass<Pick<AnalyticsProps & RouteComponentProps<{}, import("react-router").StaticContext, import("history").History.UnknownFacade>, "trackingID">, any> & import("react-router").WithRouterStatics<typeof Analytics>;
export default _default;
