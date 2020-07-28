/// <reference types="react" />
export declare type Variant = "permanent" | "persistent" | "temporary";
export interface MenuContext {
    open: boolean;
    minified: boolean;
    variant: Variant;
    setDrawerOpen: (open: boolean) => void;
    setMinified: (minified: boolean) => void;
    setDrawerVariant: (variant: Variant) => void;
}
export declare const MenuContext: import("react").Context<MenuContext | undefined>;
export default MenuContext;
