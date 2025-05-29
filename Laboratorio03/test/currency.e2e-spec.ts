import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('CurrencyController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/currency/dollarEquivalent/:amount (GET)', () => {
    describe('given an invalid amount in colones', () => {
      describe('when the amount is not a number', () => {
        it('then should return 400 Bad Request', () => {
          return request(app.getHttpServer())
            .get('/currency/dollarEquivalent/invalid')
            .expect(400);
        });
      });
    });
  });
});
