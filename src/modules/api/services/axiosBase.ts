import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Appearance } from 'react-native';
import Snackbar from 'react-native-snackbar';

import { I18n } from '~modules/localization';
import { dark, light } from '~theme';

import { AXIOS_REQUEST_TIMEOUT_MSEC } from '../config';

const BASE_URL = __DEV__ ? 'https://restcountries.eu/rest/v2' : 'https://restcountries.eu/rest/v2';

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
    const theme = Appearance.getColorScheme() === 'dark' ? dark : light;

    Snackbar.show({
      text: I18n.t('unknownException'),
      textColor: theme.accent,
      duration: Snackbar.LENGTH_SHORT,
    });

    return Promise.reject(error);
  }
);

const get = <R>(url: string, config?: AxiosRequestConfig): Promise<R> =>
  instance.get(url, config).then(({ data }) => data);

const post = <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
  instance.post(url, data, config).then(({ data: responseData }) => responseData);

const put = <D, R>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> =>
  instance.put(url, data, config).then(({ data: responseData }) => responseData);

export { get, instance, post, put };
