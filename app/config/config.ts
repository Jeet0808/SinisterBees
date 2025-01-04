import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { ConfigType } from '../types/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const environment = process.env.NODE_ENV || 'development';
const baseConfig = {
  appName: process.env.APP_NAME || 'SinisterBEES',
  port: process.env.PORT || 3000,
  logLevel: process.env.LOG_LEVEL || 'info',
};

const environmentConfig = await import(path.join(__dirname, environment));
const config:ConfigType = { ...baseConfig, ...environmentConfig.default };

export default config;
