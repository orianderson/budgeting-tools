import { Controller, Get, Param, Res } from '@nestjs/common';
import { SuppliesUsecasesFactory } from '../factory';
import { Response } from 'express';

@Controller('supplies')
export class SearchSuppliersControllers {
  constructor(private readonly usecases: SuppliesUsecasesFactory) {}

  @Get(':search')
  async search(@Param() params: string, @Res() res: Response): Promise<void> {
    const search = String(params['search']);
    const results = await this.usecases.search().execute(search);

    res.status(200).send(results);
  }
}
