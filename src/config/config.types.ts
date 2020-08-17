import { ComponentType } from "react";
import { AnalyticsProps } from "components/Analytics";
import { RouteProps, RouteChildrenProps } from "react-router-dom";
import { PaletteType, ThemeOptions } from "@material-ui/core";

export interface SSO {
  lsKey: string;
  client_id: string;
  redirect_url: string;
  login_url: string;
  base_url: string;
  user_info_url: string;
  maxTryOn401: number;
}

export interface AppAuth {
  signInURL: string;
  fullContent?: boolean;
  displaySignInPage?: boolean;
  sso: SSO;
}

export interface DrawerItemProps {
  text: string;
  visible?: boolean;
  path?: string;
  icon?: JSX.Element;
  items?: Omit<DrawerItemProps, "items">[];
  activeOnExact?: boolean;
}

export interface AppDrawer {
  display: boolean;
  items: DrawerItemProps[][];
  itemComponent?: ComponentType<DrawerItemProps>;
}

export type AppRoute = {
  component: ComponentType<RouteChildrenProps<any>>;
  isPrivate: boolean;
  fallbackComponent?: ComponentType<RouteChildrenProps<any>>;
} & RouteProps;

export interface AppTheme {
  lsKey?: string;
  defaultThemeID?: string;
  defaultType?: PaletteType;
  themes?: Record<string, ThemeOptions>;
}

export interface AppConfig {
  auth: AppAuth;
  landingPage?: ComponentType;
  pageNotFound?: ComponentType;
  displayAppBar?: boolean;
  drawer: AppDrawer;
  theme: AppTheme;
  routes: AppRoute[];
  panelRoutes: AppRoute[];
  analyticsProps?: AnalyticsProps;
  components?: {
    Loading?: ComponentType;
    Footer?: ComponentType;
    SignIn?: ComponentType;
  };
}
