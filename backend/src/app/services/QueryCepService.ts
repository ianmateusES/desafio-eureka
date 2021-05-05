import { injectable, inject } from 'tsyringe';

import AppError from '@errors/AppError';
import ICacheProvider from '@providers/CacheProvider/models/ICacheProvider';
import api from '@api/api';

interface IRequest {
  cep: string;
}

interface IAddress {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

@injectable()
class QueryCepService {
  constructor(
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ cep }: IRequest): Promise<IAddress | undefined> {
    let address = await this.cacheProvider.recover<IAddress>(cep);

    if (!address) {
      try {
        const resp = await api.get(`/${cep}/json`);
        address = resp.data as IAddress;
        await this.cacheProvider.save<IAddress>(cep, address);
      } catch (err) {
        throw new AppError('Could not access external api');
      }
    }

    return address;
  }
}

export default QueryCepService;
