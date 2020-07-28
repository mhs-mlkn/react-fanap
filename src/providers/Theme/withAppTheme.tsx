import React, { ComponentType } from "react";
import Context from "./Context";

function withAppTheme<P extends {}>(Component: ComponentType<P>) {
  const ChildComponent = (props: P) => {
    return (
      <Context.Consumer>
        {contextProps => {
          return <Component {...contextProps} {...props} />;
        }}
      </Context.Consumer>
    );
  };

  return ChildComponent;
}

export default withAppTheme;
