import { createContext } from "react";

export type Variant = "permanent" | "persistent" | "temporary";

export interface MenuContext {
  open: boolean;
  minified: boolean;
  variant: Variant;
  setDrawerOpen: (open: boolean) => void;
  setMinified: (minified: boolean) => void;
  setDrawerVariant: (variant: Variant) => void;
}

export const MenuContext = createContext<MenuContext | undefined>(undefined);

export default MenuContext;
