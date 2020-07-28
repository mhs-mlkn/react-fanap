/// <reference types="react" />
import { Variant } from "providers/Drawer";
declare type DrawerProps = {
    smDown: boolean;
    open: boolean;
    variant: Variant;
    minified: boolean;
    onDrawerToggle: () => void;
    onVariantToggle: () => void;
    onMinifiedToggle: () => void;
};
declare const DrawerHeader: (props: DrawerProps) => JSX.Element;
export default DrawerHeader;
