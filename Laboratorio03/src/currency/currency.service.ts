import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CurrencyService {
  constructor(@Inject('dollarValue') private dollarValue: number) {}

  getDollarEquivalent(colones: number): number {
    return colones / this.dollarValue;
  }

  public async getDollarValue(): Promise<void> {
    type ApiResponse = {
      dolar: {
        venta: number;
      };
    };
    const response = await axios.get<ApiResponse>(
      'https://api.hacienda.go.cr/indicadores/tc',
    );
    this.dollarValue = response.data.dolar.venta;
  }
}
