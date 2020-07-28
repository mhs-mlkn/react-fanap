import React, { PropsWithChildren } from "react";
import { MenuContext } from "./Context";
declare const Provider: (props: React.PropsWithChildren<{
    menu: Partial<MenuContext>;
}>) => JSX.Element;
export default Provider;
