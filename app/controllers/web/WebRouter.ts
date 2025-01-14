import { Router } from 'express';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WebRouter = Router();

const viteDistPath = path.join(__dirname, 'SinisterBeesFrontend', 'dist');

WebRouter.use(express.static(viteDistPath));

WebRouter.use('/web', (req, res, next) => {
  next();
});

WebRouter.get('/web/*', (req, res) => {
  console.log(path.join(viteDistPath, 'index.html'));
  res.sendFile(path.join(viteDistPath, 'index.html'));
});

export default WebRouter;
