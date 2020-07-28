import { PropsWithChildren } from "react";
import { AppTheme } from "config";
declare const Provider: (props: PropsWithChildren<{
    theme: AppTheme;
}>) => JSX.Element;
export default Provider;
