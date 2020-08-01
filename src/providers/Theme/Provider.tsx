import React, { useState, useEffect, PropsWithChildren } from "react";
import Context from "./Context";
import { AppTheme } from "config";
import { PaletteType } from "@material-ui/core";

const Provider = (props: PropsWithChildren<{ theme: AppTheme }>) => {
  const { theme: appTheme, children } = props;
  const {
    lsKey = "REACT_FANAP",
    defaultThemeID = "default",
    defaultType = "light"
  } = appTheme;
  const themeIDKey = `${lsKey}:THEME_ID`;
  const typeKey = `${lsKey}:THEME_TYPE`;
  const [themeID, setThemeID] = useState(defaultThemeID);
  const [type, setType] = useState(defaultType);

  useEffect(() => {
    const persistThemeID = localStorage.getItem(themeIDKey);
    const persistType = localStorage.getItem(typeKey);

    if (persistThemeID) {
      setThemeID(persistThemeID);
    }

    if (persistType) {
      setType(persistType as PaletteType);
    }
  }, [themeIDKey, typeKey]);

  useEffect(() => {
    try {
      localStorage.setItem(themeIDKey, themeID);
    } catch (error) {
      console.warn(error);
    }
  }, [themeID, themeIDKey]);

  useEffect(() => {
    try {
      localStorage.setItem(typeKey, type);
    } catch (error) {
      console.warn(error);
    }
  }, [type, typeKey]);

  return (
    <Context.Provider
      value={{
        themeID,
        type,
        setThemeID,
        setType
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
