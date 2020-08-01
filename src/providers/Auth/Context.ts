import { createContext } from "react";

export type Login = {
  access_token: string;
  refresh_token: string;
  code_verifier: string;
};

export interface AuthContext {
  isAuthenticated: () => boolean;
  getLoginUrl: (qs?: string) => string;
  fetchToken: (code: string) => Promise<any>;
  logout: () => void;
}

export const Context = createContext<AuthContext | undefined>(undefined);

export default Context;
