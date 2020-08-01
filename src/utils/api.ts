import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class Api {
  private _axios: AxiosInstance;
  private subscribers: Function[] = [];
  private isRefreshTokenInIssued = false;
  private NUM_OF_REQ_ISSUED: Record<string, number> = {};

  constructor() {
    this._axios = Axios.create();
  }

  get axios() {
    return this._axios;
  }

  public async get<T = any>(url: string, config?: AxiosRequestConfig) {
    return this._axios.get<T>(url, config);
  }

  public async post<T = any>(url: string, config?: AxiosRequestConfig) {
    return this._axios.post<T>(url, config);
  }

  public async put<T = any>(url: string, config?: AxiosRequestConfig) {
    return this._axios.put<T>(url, config);
  }

  public async patch<T = any>(url: string, config?: AxiosRequestConfig) {
    return this._axios.patch<T>(url, config);
  }

  public async delete<T = any>(url: string, config?: AxiosRequestConfig) {
    return this._axios.delete<T>(url, config);
  }

  public configAxios(
    access_token: string,
    maxTry: number,
    refreshToken: () => Promise<any>
  ) {
    this._axios.interceptors.request.use(config => {
      config.headers.token = access_token;
      const count = this.NUM_OF_REQ_ISSUED[config.url ?? ""] ?? 0;
      this.NUM_OF_REQ_ISSUED[config.url ?? ""] = count + 1;
      return config;
    });

    this.axios.interceptors.response.use(
      response => {
        Reflect.deleteProperty(
          this.NUM_OF_REQ_ISSUED,
          response.config.url ?? ""
        );
        return response;
      },
      error => {
        const status = error.response?.status ?? 400;
        if (status === 401) {
          return this.refreshTokenAndRetry(error, maxTry, refreshToken);
        }
        return Promise.reject(error);
      }
    );
  }

  private async refreshTokenAndRetry(
    error: any,
    maxTry: number,
    refreshToken: () => Promise<any>
  ) {
    const onAccessTokenFetched = () => {
      this.subscribers.forEach(callback => callback());
      this.subscribers = [];
    };

    const addSubscriber = (callback: Function) => {
      this.subscribers.push(callback);
    };

    try {
      const errorResponse = error?.response ?? {};

      const retryOriginalRequest = new Promise(resolve => {
        addSubscriber(() => resolve(this._axios(errorResponse?.config)));
      });

      if (this.NUM_OF_REQ_ISSUED[errorResponse.config?.url ?? ""] > maxTry) {
        throw new Error();
      }

      if (!this.isRefreshTokenInIssued) {
        this.isRefreshTokenInIssued = true;
        await refreshToken();
        this.isRefreshTokenInIssued = false;
        onAccessTokenFetched();
      }

      return retryOriginalRequest;
    } catch (err) {
      Promise.reject(err);
    }
  }
}

const api = new Api();
export default api;
