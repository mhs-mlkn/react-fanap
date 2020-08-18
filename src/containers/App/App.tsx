import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import config, { AppConfig } from "config";
import { AppThemeProvider } from "providers/Theme";
import { AuthProvider } from "providers/Auth";
import Analytics from "components/Analytics";
import PrivateRoute from "containers/PrivateRoute";
import LoadingComponent from "components/Loading";
import ErrorBoundary from "components/ErrorBoundary";
import store from "store";

export const RootAsync = lazy(() => import("containers/Root"));
export const SignInAsync = lazy(() => import("containers/SignIn"));

const App = ({ appConfig }: { appConfig: AppConfig }) => {
  const configs = { ...config, ...appConfig };
  const {
    auth,
    routes,
    components = {},
    landingPage: LandingPage = false
  } = configs;
  const { Loading = LoadingComponent, SignIn = SignInAsync } = components;

  const { signInURL, fullContent = true, displaySignInPage = true } = auth;

  return (
    <React.StrictMode>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Provider store={store}>
            <AuthProvider ssoConfig={configs.auth.sso}>
              <AppThemeProvider theme={configs.theme}>
                <BrowserRouter>
                  <Switch>
                    {LandingPage && (
                      <Route path="/" exact>
                        <>
                          <LandingPage />
                          {configs.analyticsProps && (
                            <Analytics {...configs.analyticsProps} />
                          )}
                        </>
                      </Route>
                    )}
                    {routes.map((route, i) => <PrivateRoute key={i} {...route} />}
                    {displaySignInPage && fullContent && (
                      <Route
                        path={signInURL}
                        exact
                        render={props => <SignIn {...props} />}
                      />
                    )}
                    <Route>
                      <RootAsync appConfig={configs} />
                    </Route>
                  </Switch>
                </BrowserRouter>
              </AppThemeProvider>
            </AuthProvider>
          </Provider>
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default App;
