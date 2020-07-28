import { useContext } from "react";
import Context from "./Context";

const useDrawer = () => {
  const menu = useContext(Context);
  if (menu === undefined) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return menu;
};

export default useDrawer;
