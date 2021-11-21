import * as axiosBase from '../axiosBase';

jest.mock('../axiosBase');
jest.mock('../countries');

export * from '../countries';
export { axiosBase };
