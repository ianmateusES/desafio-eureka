import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import './container';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import AppError from '@errors/AppError';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.messege,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Insternal server error',
  });
});

export default app;
