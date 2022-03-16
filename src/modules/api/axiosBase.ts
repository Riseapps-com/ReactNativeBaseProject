import axios from 'axios';

import { HttpRequestError } from '~modules/errors';

import { AXIOS_REQUEST_TIMEOUT, DEV_URL, PROD_URL } from './config';

import type { AxiosInstance, AxiosRequestConfig } from 'axios';

const BASE_URL = __DEV__ ? DEV_URL : PROD_URL;

export const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers: { 'Content-Type': 'application/json' },
  timeout: AXIOS_REQUEST_TIMEOUT,
});

const processAxiosError = (error: any): never => {
  if (error.response) {
    throw new HttpRequestError(error.message, error.response.status);
  }

  throw new HttpRequestError(error.message);
};

export const get = <R>(url: string, config?: AxiosRequestConfig): Promise<R> =>
  instance
    .get(url, config)
    .then(response => response.data)
    .catch(error => processAxiosError(error));

export const post = <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
  instance
    .post(url, data, config)
    .then(response => response.data)
    .catch(error => processAxiosError(error));

export const put = <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
  instance
    .put(url, data, config)
    .then(response => response.data)
    .catch(error => processAxiosError(error));
