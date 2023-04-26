import { Module } from '@nestjs/common';

import { DatabaseClient } from '@infra/database';
import { SuppliersDatabaseService } from './supplies-database.service';

@Module({
  providers: [DatabaseClient, SuppliersDatabaseService],
  exports: [SuppliersDatabaseService],
})
export class DatabaseModule {}
