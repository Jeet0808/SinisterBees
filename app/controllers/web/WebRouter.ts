import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WebRouter = Router();

const viteDistPath = path.join(__dirname, 'SinisterBeesFrontend', 'dist');

// Serve static files for everything EXCEPT the /web/* route

// Handle all requests under /web/* by serving index.html
WebRouter.get('/*', (req, res) => {
  console.log(path.join(viteDistPath, 'index.html'));
  res.sendFile(path.join(viteDistPath, 'index.html'));
});

export default WebRouter;