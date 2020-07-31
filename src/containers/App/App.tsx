import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import config, { AppConfig } from "config";
import { AppThemeProvider } from "providers/Theme";
import Analytics from "components/Analytics";
import LoadingComponent from "components/Loading";
import ErrorBoundary from "components/ErrorBoundary";
import store from "store";

export const RootAsync = lazy(() => import("containers/Root"));
export const SignInAsync = lazy(() => import("containers/Auth"));

const App = ({ appConfig }: { appConfig: AppConfig }) => {
  const configs = { ...config, ...appConfig };
  const { auth, components = {}, landingPage: LandingPage = false } = configs;
  const { Loading = LoadingComponent, SignIn = SignInAsync } = components;

  const { signInURL, fullContent = true, displaySignInPage = true } = auth;

  return (
    <React.StrictMode>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Provider store={store}>
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
                  {displaySignInPage && fullContent && (
                    <Route path={signInURL} exact>
                      <SignIn />
                    </Route>
                  )}
                  <Route>
                    <RootAsync appConfig={configs} />
                  </Route>
                </Switch>
              </BrowserRouter>
            </AppThemeProvider>
          </Provider>
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default App;
