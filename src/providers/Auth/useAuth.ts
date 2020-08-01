import { useContext } from "react";
import Context from "./Context";

const useAuth = () => {
  const auth = useContext(Context);
  if (auth === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return auth;
};

export default useAuth;
