import { ISupplies, ISuppliesRepository } from '@app/ports';
import { SuppliersDatabaseService } from '../database';
import { DatabaseClient } from '@infra/database';

export class SuppliesRepositories implements ISuppliesRepository {
  suppliesDatabase: SuppliersDatabaseService;

  constructor() {
    this.suppliesDatabase = new SuppliersDatabaseService(new DatabaseClient());
  }

  async search(item: string): Promise<ISupplies[]> {
    const results = await this.suppliesDatabase.get(item);

    return results;
  }
}
