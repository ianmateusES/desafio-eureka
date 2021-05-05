import { Router } from 'express';
import cepRouter from './cep.routes';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ mensage: 'Air application' });
});

routes.use('/cep', cepRouter);

export default routes;
