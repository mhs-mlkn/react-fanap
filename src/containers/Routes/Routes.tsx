import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "containers/PrivateRoute";
import PageNotFound from "components/PageNotFound";
import { useAppConfig } from "providers/Config";

export const SignInAsync = React.lazy(() => import("containers/Auth"));

export const Routes = () => {
  const appConfig = useAppConfig();
  const { routes, pageNotFound: NotFound = PageNotFound } = appConfig;
  const { signInURL, fullContent, displaySignInPage } = appConfig.auth;
  const { SignIn = SignInAsync } = appConfig.components;

  return (
    <Switch>
      {routes.map((route, i) => {
        return route.isPrivate ? (
          <PrivateRoute key={i} {...route} />
        ) : (
          <Route
            key={i}
            {...route}
            children={routeProps => <route.component {...routeProps} />}
          />
        );
      })}
      {displaySignInPage && !fullContent && (
        <Route path={signInURL} exact>
          <SignIn />
        </Route>
      )}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
