import winston from 'winston';
import path from 'path';
import config from '../config/config.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logDirectory = path.join(__dirname, '..', '..', 'logs');
const logFile = path.join(logDirectory, 'app.log');
const errorLogFile = path.join(logDirectory, 'error.log');

const logger = winston.createLogger({
  level: config.logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  defaultMeta: { service: 'Nothingness' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
    new winston.transports.File({ filename: logFile }),
    new winston.transports.File({ filename: errorLogFile, level: 'error' }),
  ],
});

// logger.exceptions.handle(
//   new winston.transports.File({ filename: path.join(logDirectory, 'exceptions.log') })
// );
// winston.exceptions.handle(
//     new winston.transports.Console({
//       format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.simple()
//       )
//     }),
//     new winston.transports.File({ filename: 'logs/exceptions.log' })
//   );
// process.on('unhandledRejection', (reason) => {
//   logger.error('Unhandled Promise Rejection', { reason });
// });

export default logger;
