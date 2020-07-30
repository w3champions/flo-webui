import axios, { AxiosError } from "axios";
import { FloError, FloErrorCode } from "./error";
import Store from "../redux/store";

const ServiceApiClient = axios.create({});

ServiceApiClient.interceptors.response.use((res) => res, floErrorInterceptor);

function floErrorInterceptor(error: AxiosError) {
  const data = error.response && error.response.data;
  const e = new FloError(error.message, FloErrorCode.BlizzardAPI);
  e.data = data;
  return Promise.reject(e);
}

export function getServerApiClient() {
  return ServiceApiClient;
}

const ApiClientInstance = axios.create({});

ApiClientInstance.interceptors.response.use((res) => res, errorInterceptor);
ApiClientInstance.interceptors.request.use((config) => {
  let token = Store.getState().auth.authToken;
  if (token) {
    config.headers = {
      ...config.headers,
      authorization: `Bearer ${token}`,
    };
  }
  return config;
});

function errorInterceptor(error: AxiosError) {
  const data = error.response && error.response.data;
  const message = data.message;
  if (message) {
    error.message = `${error.message}: ${message}`;
  }
  let kind = FloErrorCode.Unknown;
  if (error.response.status === 401) {
    kind = FloErrorCode.Unauthorized;
  } else if (data.kind) {
    if (data.kind in FloErrorCode) {
      kind = data.kind;
    }
  }
  const e = new FloError(message, kind);
  e.data = data.data;
  return Promise.reject(e);
}

export type ApiClient = typeof ApiClientInstance;

export function useApiClient() {
  return ApiClientInstance;
}
