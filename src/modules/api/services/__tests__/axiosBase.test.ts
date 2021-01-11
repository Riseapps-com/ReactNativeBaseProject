import MockAdapter from 'axios-mock-adapter';

import * as axiosBase from '../axiosBase';

const mockedAxios = new MockAdapter(axiosBase.instance);

const testPath = 'testPath';
const testBody = { field: 'field' };
const testResponse = { name: 'name', lastname: 'lastname' };

describe('api', () => {
  describe('axiosBase', () => {
    describe('get', () => {
      it('calls get request', async () => {
        mockedAxios.onGet(testPath).reply(200, testResponse);

        const result = await axiosBase.get(testPath);

        expect(result).toEqual(testResponse);
      });
    });

    describe('post', () => {
      it('calls post request', async () => {
        mockedAxios.onPost(testPath, testBody).reply(200, testResponse);

        const result = await axiosBase.post(testPath, testBody);

        expect(result).toEqual(testResponse);
      });
    });

    describe('put', () => {
      it('calls put request', async () => {
        mockedAxios.onPut(testPath, testBody).reply(200, testResponse);

        const result = await axiosBase.put(testPath, testBody);

        expect(result).toEqual(testResponse);
      });
    });
  });
});
