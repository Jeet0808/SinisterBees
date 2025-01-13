export interface ConfigType {
  appName: string;
  logLevel: string;
  port: number;
  logging: boolean;
  httplogging: boolean;
  frontend: {
    port: number;
  };
  db: {
    host: string;
    port: number;
    user: string;
    password: string;
    name: string;
  };
}
