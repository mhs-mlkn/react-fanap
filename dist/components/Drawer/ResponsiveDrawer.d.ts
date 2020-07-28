import React from "react";
import { Variant } from "providers/Drawer";
declare type DrawerProps = {
    smDown: boolean;
    open: boolean;
    minified: boolean;
    variant: Variant;
    onDrawerToggle: () => void;
};
declare const ResponsiveDrawer: (props: React.PropsWithChildren<DrawerProps>) => JSX.Element;
export default ResponsiveDrawer;
