import React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { AppRoute } from "config";
import { useAppConfig } from "providers/Config";
import { useAuth } from "providers/Auth";

const PrivateRoute = (props: AppRoute) => {
  const {
    component: Component,
    fallbackComponent: FallbackComponent,
    ...rest
  } = props;
  const auth = useAuth();
  const appConfig = useAppConfig();
  const { signInURL = "/signin" } = appConfig.auth;

  return (
    <Route
      {...rest}
      children={(routeProps: RouteComponentProps<any>) => {
        return auth.isAuthenticated() ? (
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
        );
      }}
    />
  );
};

export default PrivateRoute;
