import { SuppliesUsecasesFactory } from '../factory';
import { Module } from '@nestjs/common';
import { SearchSuppliersControllers } from './search.controller';

@Module({
  providers: [SuppliesUsecasesFactory],
  controllers: [SearchSuppliersControllers],
})
export class ControllersModule {}
