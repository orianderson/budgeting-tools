import { ISuppliesFactory } from '@app/ports';
import { SearchSuppliesUsecases } from '@app/index';
import { SuppliesRepositories } from '@infra/index';

export class SuppliesUsecasesFactory implements ISuppliesFactory {
  search(): SearchSuppliesUsecases {
    return new SearchSuppliesUsecases(new SuppliesRepositories());
  }
}
