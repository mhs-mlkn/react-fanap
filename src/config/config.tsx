import React from "react";
import { AppConfig } from "config";
import landingPage from "components/Landing";
import Loading from "components/Loading";

import MailIcon from "@material-ui/icons/Mail";

const config: AppConfig = {
  analyticsProps: { trackingID: process.env.REACT_APP_GA_TRACKING_ID ?? "" },
  landingPage,
  drawer: {
    display: true,
    items: [
      [
        {
          text: "test",
          path: "/test",
          visible: true,
          icon: <MailIcon />
        }
      ]
    ]
  },
  displayAppBar: true,
  auth: {
    sso: {
      lsKey: "REACT_FANAP_SSO",
      redirect_url:
        process.env.REACT_APP_SSO_REDIRECT_URL ??
        window.location.href.split("?")[0],
      client_id: process.env.REACT_APP_SSO_CLIENT_ID ?? "",
      login_url: process.env.REACT_APP_SSO_LOGIN_URL ?? "",
      base_url: process.env.REACT_APP_SSO_BASE_URL ?? "",
      user_info_url: process.env.REACT_APP_SSO_USER_INFO_URL ?? "",
      maxTryOn401: 3
    },
    signInURL: "/signin",
    fullContent: true,
    displaySignInPage: true
  },
  routes: [],
  panelRoutes: [
    {
      path: "/test",
      component: () => <div>test</div>,
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
