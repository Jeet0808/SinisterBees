console.log(process.Node);
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const logger = require('../app/utils/logger');
const config = require('../app/config/config');
const morgan = require('morgan');

const app = express();

const PORT = config.port;

app.use(
  morgan('combined', {
    stream: {
      write: (message) => {
        logger.info(message.trim());
      },
    },
  }),
);

logger.info(console.log(config));

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

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = {
    id,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    createdAt: '2021-06-15T14:52:00Z',
    updatedAt: '2023-01-02T09:00:00Z',
  };
  res.json(user);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger UI is available at http://localhost:${PORT}/api-docs`);
});
