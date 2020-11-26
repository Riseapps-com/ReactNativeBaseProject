import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';

import AXIOS_REQUEST_TIMEOUT_MSEC from './config';

const BASE_URL = __DEV__ ? Config.BASE_API_DEV_URL : Config.BASE_API_PROD_URL;

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: AXIOS_REQUEST_TIMEOUT_MSEC,
});

instance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

const get = <R>(url: string, config?: AxiosRequestConfig): Promise<R> =>
  instance.get(url, config).then(({ data }) => data);
const post = <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
  instance.post(url, data, config).then(({ data: responseData }) => responseData);
const put = <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
  instance.put(url, data, config).then(({ data: responseData }) => responseData);
const patch = <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
  instance.patch(url, data, config).then(({ data: responseDate }) => responseDate);
const deleteAxios = <R>(url: string, config?: AxiosRequestConfig): Promise<R> =>
  instance.delete(url, config).then(({ data }) => data);

export { deleteAxios, get, patch, post, put };
