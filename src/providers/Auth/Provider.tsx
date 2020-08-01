import React, { PropsWithChildren, Component } from "react";
import Context, { Login } from "./Context";
import { SSO } from "config";
import {
  generateVerifier,
  getChallenegeCode,
  fetchSSOToken,
  refreshSSOToken,
  api
} from "utils";

type propsType = PropsWithChildren<{ ssoConfig: SSO }>;

class AuthProvider extends Component<propsType> {
  private readonly accessTokenKey = `${this.props.ssoConfig.lsKey}:ACCESS_TOKEN`;
  private readonly refreshTokenKey = `${this.props.ssoConfig.lsKey}:REFRESH_TOKEN`;
  private readonly codeVerifierKey = `${this.props.ssoConfig.lsKey}:CODE_VERIFIER`;

  private accessToken = "";
  private refreshToken = "";
  private codeVerifier = "";

  componentDidMount = () => {
    this.accessToken = localStorage.getItem(this.accessTokenKey) ?? "";
    this.refreshToken = localStorage.getItem(this.refreshTokenKey) ?? "";
    this.codeVerifier = localStorage.getItem(this.codeVerifierKey) ?? "";
    const maxTryOn401 = this.props.ssoConfig.maxTryOn401;

    api.configAxios(this.accessToken, maxTryOn401, this.refreshSSOToken);
  };

  handleResponse = ({ access_token, refresh_token }: Login) => {
    if (!!(access_token && refresh_token)) {
      this.accessToken = access_token;
      this.refreshToken = refresh_token;
      return this.saveInfo();
    } else {
      return Promise.reject("invalid sso tokens");
    }
  };

  saveInfo = () => {
    localStorage.setItem(this.accessTokenKey, this.accessToken);
    localStorage.setItem(this.refreshTokenKey, this.refreshToken);
    localStorage.setItem(this.codeVerifierKey, this.codeVerifier);
  };

  refreshSSOToken = async () => {
    const { base_url, client_id } = this.props.ssoConfig;
    return refreshSSOToken<Login>(
      base_url,
      client_id,
      this.refreshToken,
      this.codeVerifier
    ).then(this.handleResponse);
  };

  isAuthenticated = () => {
    return !!this.accessToken;
  };

  getLoginUrl = (from?: string) => {
    const { login_url, client_id, redirect_url } = this.props.ssoConfig;
    this.codeVerifier = generateVerifier();
    this.saveInfo();
    const challengeCode = getChallenegeCode(this.codeVerifier);
    const ssoLoginUrl = [
      `${login_url}`,
      `client_id=${client_id}`,
      `code_challenge=${challengeCode}`,
      `redirect_uri=${redirect_url}`,
      `state=${from ?? ""}`
    ].join("&");
    return ssoLoginUrl;
  };

  fetchToken = (code: string) => {
    const { base_url, client_id, redirect_url } = this.props.ssoConfig;
    return fetchSSOToken<Login>(
      base_url,
      client_id,
      code,
      this.codeVerifier,
      redirect_url
    ).then(this.handleResponse);
  };

  logout = () => {
    this.accessToken = "";
    this.refreshToken = "";
    this.codeVerifier = "";
  };

  render = () => {
    return (
      <Context.Provider
        value={{
          isAuthenticated: this.isAuthenticated,
          getLoginUrl: this.getLoginUrl,
          fetchToken: this.fetchToken,
          logout: this.logout
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  };
}

export default AuthProvider;
