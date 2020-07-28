import { createContext } from "react";
import { PaletteType } from "@material-ui/core";

export interface ThemeContext {
  themeID: string;
  type: PaletteType;
  setThemeID: (themeID: string) => void;
  setType: (type: PaletteType) => void;
}

export const Context = createContext<ThemeContext | undefined>(undefined);

export default Context;
