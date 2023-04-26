import { ISupplies } from '../interfaces';

export abstract class ISuppliesRepository {
  abstract search(item: string): Promise<ISupplies[]>;
}
