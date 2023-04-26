import { IInputPort, ISupplies } from '../ports';
import { ISuppliesRepository } from '../ports';

export class SearchSuppliesUsecases implements IInputPort<string, ISupplies> {
  constructor(private readonly suppliesRepository: ISuppliesRepository) {}
  async execute(search: string): Promise<ISupplies[]> {
    const results = await this.suppliesRepository.search(search);

    return results;
  }
}
