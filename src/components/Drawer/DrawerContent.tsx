import React, { ComponentType } from "react";
import Scrollbar from "components/Scrollbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { DrawerItemProps } from "config";

type MenuListPorps = {
  items: DrawerItemProps[];
  itemComponent: ComponentType<DrawerItemProps>;
  divider: boolean;
};

const DrawerContent = (props: MenuListPorps) => {
  const { items, itemComponent: Item, divider = true } = props;
  return (
    <Scrollbar>
      <List>
        {items
          .filter(item => item.visible)
          .map((item, index) => (
            <Item key={index} {...item} />
          ))}
      </List>
      {divider && <Divider />}
    </Scrollbar>
  );
};

export default DrawerContent;
