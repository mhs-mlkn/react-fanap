import { ComponentType } from "react";
import { DrawerItemProps } from "config";
declare type MenuListPorps = {
    items: DrawerItemProps[];
    itemComponent: ComponentType<DrawerItemProps>;
    divider: boolean;
};
declare const DrawerContent: (props: MenuListPorps) => JSX.Element;
export default DrawerContent;
