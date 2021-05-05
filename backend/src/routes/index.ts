import { Router } from 'express';
// import arquivosRouter from './arquivos.routes'

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ mensage: 'Air application' });
});

// routes.use('/arquivos', arquivosRouter);

export default routes;
