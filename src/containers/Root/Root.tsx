import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  createMuiTheme,
  ThemeProvider,
  ThemeOptions,
  jssPreset,
  StylesProvider
} from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import CssBaseline from "@material-ui/core/CssBaseline";
import JalaliUtils from "@date-io/jalaali";
import { AppConfig } from "config";
import { AppConfigProvider } from "providers/Config";
import { useAppTheme } from "providers/Theme";
import { DrawerProvider } from "providers/Drawer";
import AppLayout from "containers/AppLayout";

const DefaultTheme = { palette: {} };

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const Root = ({ appConfig }: { appConfig: AppConfig }) => {
  const { theme: themeConfig } = appConfig;
  const { themeID, type } = useAppTheme();
  const { themes = {} } = themeConfig;
  const selectedTheme = themes[themeID] || DefaultTheme;
  const { palette = {} } = selectedTheme;
  const options: ThemeOptions = {
    ...selectedTheme,
    palette: { ...palette, type },
    direction: "rtl"
  };
  const theme = createMuiTheme(options);

  return (
    <StylesProvider jss={jss}>
      <AppConfigProvider appConfig={appConfig}>
        <ThemeProvider theme={theme}>
          <DrawerProvider menu={{}}>
            <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
              <CssBaseline />
              <AppLayout />
            </MuiPickersUtilsProvider>
          </DrawerProvider>
        </ThemeProvider>
      </AppConfigProvider>
    </StylesProvider>
  );
};

export default Root;
