import * as dotenv from 'dotenv';
dotenv.config();

import { IDatabaseEnvironment, IAppPort } from '@app/ports';

export class EnvironmentService implements IDatabaseEnvironment, IAppPort {
  getApiPort(): string {
    return process.env['API_PORT'];
  }

  getEnvironment(): string {
    return process.env['NODE_ENV'];
  }

  getDatabaseUrl(): string {
    return process.env['DATABASE_URL'];
  }
}

export const config = new EnvironmentService();
