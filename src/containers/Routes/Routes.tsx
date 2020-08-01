import React from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import PrivateRoute from "containers/PrivateRoute";
import PageNotFound from "components/PageNotFound";
import { useAppConfig } from "providers/Config";

export const SignInAsync = React.lazy(() => import("containers/SignIn"));

export const Routes = () => {
  const appConfig = useAppConfig();
  const {
    routes,
    components = {},
    pageNotFound: NotFound = PageNotFound
  } = appConfig;
  const {
    signInURL,
    fullContent = true,
    displaySignInPage = true
  } = appConfig.auth;
  const { SignIn = SignInAsync } = components;

  return (
    <Switch>
      {routes.map((route, i) => {
        return route.isPrivate ? (
          <PrivateRoute key={i} {...route} />
        ) : (
          <Route
            key={i}
            {...route}
            children={(routeProps: RouteComponentProps<any>) => (
              <route.component {...routeProps} />
            )}
          />
        );
      })}
      {displaySignInPage && !fullContent && (
        <Route path={signInURL} exact render={props => <SignIn {...props} />} />
      )}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
