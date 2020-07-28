import { Component } from "react";
import { AppConfig } from "config";
declare class Provider extends Component<{
    appConfig: Partial<AppConfig>;
}> {
    render(): JSX.Element;
}
export default Provider;
