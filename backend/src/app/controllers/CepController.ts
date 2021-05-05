import QueryCepService from '@services/QueryCepService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class CepController {
  public async show(req: Request, res: Response): Promise<Response> {
    const { cep } = req.params;

    const queryCepService = container.resolve(QueryCepService);

    const address = await queryCepService.execute({ cep });

    return res.json(address);
  }
}
