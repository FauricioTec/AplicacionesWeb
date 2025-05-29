import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';

@Module({
  providers: [
    {
      provide: 'dollarValue',
      useValue: 1,
    },
    CurrencyService,
  ],
  controllers: [CurrencyController],
})
export class CurrencyModule {
  constructor(private readonly currencyService: CurrencyService) {}

  async onModuleInit() {
    await this.currencyService.getDollarValue();
  }
}
