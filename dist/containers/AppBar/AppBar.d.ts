import React from "react";
import { AppBarProps } from "@material-ui/core/AppBar";
import { ToolbarProps } from "@material-ui/core/Toolbar";
import { WithWidth } from "@material-ui/core/withWidth";
export declare type MyAppBarProps = {
    title?: string;
    appBarProps?: AppBarProps;
    toolbarProps?: ToolbarProps;
} & WithWidth;
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<MyAppBarProps>, "title" | "children" | "appBarProps" | "toolbarProps"> & import("@material-ui/core/withWidth").WithWidthProps>;
export default _default;
