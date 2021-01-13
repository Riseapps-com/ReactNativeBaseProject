import * as axiosBase from '../axiosBase';
import * as countriesApi from '../countriesApi';

jest.mock('../axiosBase');
jest.mock('../countriesApi');

export { axiosBase, countriesApi };
