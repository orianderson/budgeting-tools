import { IDatabaseService, ISupplies } from '@app/ports';
import { DatabaseClient } from '@infra/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SuppliersDatabaseService implements IDatabaseService {
  constructor(private readonly databaseClient: DatabaseClient) {}

  async get(search: string): Promise<ISupplies[]> {
    const results = await this.databaseClient.supplies.findMany({
      where: {
        description: {
          search: search,
        },
      },
    });

    return results;
  }
}
