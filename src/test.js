import axios from 'axios';

import { fetchData, API } from './';

jest.mock('axios');

describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      data: {
        hits: [
          {
            objectID: '1',
            title: 'Star Wars',
          },
          {
            objectID: '2',
            title: 'Back to the Future',
          },
        ],
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData()).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      API,
    );
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(fetchData()).rejects.toThrow(errorMessage);
  });
});