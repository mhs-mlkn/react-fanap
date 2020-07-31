import { ComponentType } from "react";
import { AnalyticsProps } from "components/Analytics";
import { RouteProps, RouteChildrenProps } from "react-router-dom";
import { PaletteType, ThemeOptions } from "@material-ui/core";

export interface AppAuth {
  isAuthenticated: (appConfig: AppConfig) => boolean;
  signInURL: string;
  fullContent?: boolean;
  displaySignInPage?: boolean;
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

export interface AppRoute extends RouteProps {
  component: ComponentType<RouteChildrenProps<any>> | ComponentType<any>;
  isPrivate: boolean;
  fallbackComponent?: ComponentType<RouteChildrenProps<any>>;
}

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
  analyticsProps?: AnalyticsProps;
  components?: {
    Loading?: ComponentType;
    Footer?: ComponentType;
    SignIn?: ComponentType;
  };
}
