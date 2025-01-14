import express from 'express';
import config from '../app/config/config';
import InitApp from '../app/init';
export const app = express();

const PORT = config.port;

InitApp();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger UI is available at http://localhost:${PORT}/api-docs`);
});
