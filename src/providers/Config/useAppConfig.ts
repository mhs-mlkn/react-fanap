import { useContext } from "react";
import Context from "./Context";

const useAppConfig = () => {
  const appConfig = useContext(Context);
  return appConfig;
};

export default useAppConfig;
