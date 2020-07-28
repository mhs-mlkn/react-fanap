import React, { ComponentType } from "react";
import Context from "./Context";

function withAppConfigs<P extends {}>(Component: ComponentType<P>) {
  const ChildComponent = (props: P) => {
    return (
      <Context.Consumer>
        {appConfig => {
          return <Component appConfig={appConfig} {...props} />;
        }}
      </Context.Consumer>
    );
  };

  return ChildComponent;
}

export default withAppConfigs;
