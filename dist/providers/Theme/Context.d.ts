/// <reference types="react" />
import { PaletteType } from "@material-ui/core";
export interface ThemeContext {
    themeID: string;
    type: PaletteType;
    setThemeID: (themeID: string) => void;
    setType: (type: PaletteType) => void;
}
export declare const Context: import("react").Context<ThemeContext | undefined>;
export default Context;
