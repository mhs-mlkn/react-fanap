import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppRoute } from "config";
import { useAppConfig } from "providers/Config";

const PrivateRoute = (props: AppRoute) => {
  const {
    component: Component,
    fallbackComponent: FallbackComponent,
    ...rest
  } = props;
  const appConfig = useAppConfig();
  const { auth } = appConfig || {};
  const { isAuthenticated = () => false, signInURL = "/signin" } = auth || {};

  return (
    <Route
      {...rest}
      children={routeProps =>
        isAuthenticated(appConfig) ? (
          <Component {...routeProps} />
        ) : !!FallbackComponent ? (
          <FallbackComponent {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: signInURL,
              search: `from=${routeProps.location.pathname}`,
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
