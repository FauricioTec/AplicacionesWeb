import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CurrencyService,
        {
          provide: 'dollarValue',
          useValue: 500,
        },
      ],
    }).compile();

    service = module.get<CurrencyService>(CurrencyService);
  });

  describe('getDollarEquivalent', () => {
    describe('given a valid amount in colones', () => {
      describe('when the amount is 1000', () => {
        it('then should return 2', () => {
          const colonesAmount = 1000;
          const dollarEquivalent = service.getDollarEquivalent(colonesAmount);
          expect(dollarEquivalent).toBe(2);
        });
      });
    });
  });
});
