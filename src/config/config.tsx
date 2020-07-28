import React from "react";
import { AppConfig } from "config";
import landingPage from "components/Landing";
import Loading from "components/Loading";

import MailIcon from "@material-ui/icons/Mail";

const config: AppConfig = {
  analyticsProps: { trackingID: "UA-172951553-1" },
  landingPage,
  datepickerEnabled: true,
  drawer: {
    display: true,
    items: [
      [
        {
          text: "test",
          path: "/test",
          visible: true,
          icon: <MailIcon />
        },
        {
          text: "test2",
          path: "/test2",
          visible: true,
          icon: <MailIcon />
        }
      ]
    ]
  },
  dispalyAppBar: true,
  auth: {
    isAuthenticated: () => false,
    signInURL: "/signin",
    fullContent: true,
    displaySignInPage: true
  },
  routes: [
    {
      path: "/test",
      component: React.lazy(() => import("components/Test")),
      exact: true,
      isPrivate: true
    }
  ],
  theme: {
    defaultThemeID: "default",
    defaultType: "light",
    themes: {}
  },
  components: {
    Loading,
    Footer: () => <div>Footer</div>
  }
};

export default config;
