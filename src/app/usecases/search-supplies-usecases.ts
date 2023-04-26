import { Either, left, right } from '@helpers/either';
import { IInputPort, ISupplies } from '../ports';
import { ISuppliesRepository } from '../ports';
import { NotFoundError } from '@app/errors';

export class SearchSuppliesUsecases implements IInputPort<string, ISupplies[]> {
  constructor(private readonly suppliesRepository: ISuppliesRepository) {}
  async execute(search: string): Promise<Either<NotFoundError, ISupplies[]>> {
    const results = await this.suppliesRepository.search(search);

    if (!results) return left(new NotFoundError(search));

    return right(results);
  }
}
