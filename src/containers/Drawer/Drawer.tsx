import React from "react";
import withWidth, { isWidthDown, WithWidth } from "@material-ui/core/withWidth";
import ResponsiveDrawer, {
  DrawerHeader,
  DrawerContent
} from "components/Drawer";
import { useAppConfig } from "providers/Config";
import { useDrawer } from "providers/Drawer";

const DrawerItemAsync = React.lazy(() =>
  import("components/Drawer/DarwerItem")
);

const Drawer = ({ width }: WithWidth) => {
  const config = useAppConfig();
  const menu = useDrawer();
  const smDown = isWidthDown("sm", width);

  const { itemComponent: ItemComponent = DrawerItemAsync } = config.drawer;

  const handleDrawerToggle = () => {
    const { open, setDrawerOpen } = menu;
    setDrawerOpen(!open);
    menu.setMinified(false);
  };

  const handleVariantToggle = () => {
    const { variant, setDrawerVariant } = menu;
    setDrawerVariant(variant === "permanent" ? "temporary" : "permanent");
  };

  const handleMinifiedToggle = () => {
    menu.setDrawerOpen(false);
    menu.setMinified(true);
  };

  return (
    <ResponsiveDrawer
      smDown={smDown}
      open={menu.open}
      minified={menu.minified}
      variant={menu.variant}
      onDrawerToggle={handleDrawerToggle}
    >
      <DrawerHeader
        smDown={smDown}
        open={menu.open}
        variant={menu.variant}
        minified={menu.minified}
        onDrawerToggle={handleDrawerToggle}
        onVariantToggle={handleVariantToggle}
        onMinifiedToggle={handleMinifiedToggle}
      />
      {config.drawer.items.map((list, index) => (
        <DrawerContent
          key={index}
          items={list}
          itemComponent={ItemComponent}
          divider
        />
      ))}
    </ResponsiveDrawer>
  );
};

export default withWidth()(Drawer);
