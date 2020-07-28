import React, { PropsWithChildren, useState } from "react";
import Context, { MenuContext } from "./Context";

const Provider = (props: PropsWithChildren<{ menu: Partial<MenuContext> }>) => {
  const { menu = {}, children } = props;
  const {
    open: defaultDrawerOpen = true,
    minified: defaultMinified = false,
    variant: defaultVariant = "permanent"
  } = menu;

  const [open, setDrawerOpen] = useState(defaultDrawerOpen);
  const [minified, setMinified] = useState(defaultMinified);
  const [variant, setDrawerVariant] = useState(defaultVariant);

  return (
    <Context.Provider
      value={{
        open,
        minified,
        variant: variant,
        setDrawerOpen,
        setMinified,
        setDrawerVariant
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
