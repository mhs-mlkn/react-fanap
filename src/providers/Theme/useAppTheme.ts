import { useContext } from "react";
import Context from "./Context";

const useAppTheme = () => {
  const theme = useContext(Context);
  if (theme === undefined) {
    throw new Error("useAppTheme must be used within a AppThemeProvider");
  }
  return theme;
};

export default useAppTheme;
