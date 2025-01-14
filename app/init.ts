import { Response, Request } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import morgan from 'morgan';
import logger from '../app/utils/logger';
import config from '../app/config/config';
import WebRouter from '../app/controllers/web/WebRouter';
import { app } from '../src/Backend';
import pool from './db/index';
import ApiRouter from "./controllers/api"
import cors from "cors"
const SetupMorgan = () => {
  app.use(
    morgan('combined', {
      stream: {
        write: (message) => {
          logger.info(message.trim());
        },
      },
    }),
  );
};

const SetUpRoutes = () => {
  app.use('/web', WebRouter);
  app.use("/api",ApiRouter)
  app.get('/users/:id', async (req: Request, res: Response) => {
    const result = await pool.query('SELECT NOW()');
    res.send(result.rows);
  });
};

const SetUpSwagger = () => {
  const swaggerOptions = {
    definition: {
      openapi: '3.0.1',
      info: {
        title: 'User API',
        version: '1.0.0',
        description: 'API to retrieve user information.',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['./src/routes/*.js'],
  };

  const swaggerDocs = swaggerJsdoc(swaggerOptions);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

const InitApp = () => {
  logger.info(console.log(config));
  app.use(cors())
  SetUpRoutes();
  SetUpSwagger();
  SetupMorgan();
};

export default InitApp;
