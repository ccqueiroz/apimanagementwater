import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { routes } from './routes';
import { AppError } from '@shared/errors/AppError';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    } else {
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  }
);

app.listen(3333, () => console.log('server is running! Port: ', 3333));
