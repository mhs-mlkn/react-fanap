import React, { Component } from "react";
import config, { AppConfig } from "config";
import Context from "./Context";

class Provider extends Component<{ appConfig: Partial<AppConfig> }> {
  render() {
    const { appConfig, children } = this.props;

    return (
      <Context.Provider value={{ ...config, ...appConfig }}>
        {children}
      </Context.Provider>
    );
  }
}

export default Provider;
