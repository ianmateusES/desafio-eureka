import MockAdapter from 'axios-mock-adapter';
import api from '@api/api';

import FakeCacheProvider from '@providers/CacheProvider/fakes/FakeCacheProvider';
import QueryCepService from './QueryCepService';

const apiMock = new MockAdapter(api);

let fakeCacheProvider: FakeCacheProvider;
let queryCepService: QueryCepService;

describe('QueryCepService', () => {
  beforeEach(() => {
    fakeCacheProvider = new FakeCacheProvider();
    queryCepService = new QueryCepService(fakeCacheProvider);
  });

  it('should be able to query zip code', async () => {
    const apiResponse = {
      cep: '60170-320',
      logradouro: 'Rua Coronel Jucá',
      complemento: 'até 429/430',
      bairro: 'Meireles',
      localidade: 'Fortaleza',
      uf: 'CE',
      ibge: '2304400',
      gia: '',
      ddd: '85',
      siafi: '1389',
    };

    apiMock.onGet('/60170-320/json').reply(200, apiResponse);

    const address = await queryCepService.execute({
      cep: '60170-320',
    });

    expect(address).toHaveProperty('logradouro');
    expect(address.cep).toBe('60170-320');
  });
});
