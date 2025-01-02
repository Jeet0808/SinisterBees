// Import necessary modules
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Create an instance of an Express app
const app = express();

// Define a port to listen on
const PORT = 3000;

// Swagger definition (JSDoc-based)
const swaggerOptions = {
  definition: {
    openapi: '3.0.1', // OpenAPI version
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
  apis: ['./src/routes/*.js'], // Path to your route files (for JSDoc annotations)
};

// Generate Swagger specification
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Set up Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Sample endpoint to retrieve user info
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  // Simulated response
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
