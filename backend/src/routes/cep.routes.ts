import { Router } from 'express';
import CepController from '@controllers/CepController';

const cepRouter = Router();
const cepController = new CepController();

cepRouter.get('/:cep', cepController.show);

export default cepRouter;
