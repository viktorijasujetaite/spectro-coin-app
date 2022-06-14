interface CurrencyBalanceItem {
  name: string;
  id: string;
  balance: number;
  rate: number;
}

interface CurrencyResponse {
  currencyFrom: string;
  currencyFromScale: number;
  currencyTo: string;
  currencyToScale: number;
  last: number;
  lastHP: number;
  timestamp: number;
  friendlyLast: string;
}

interface PriceResponse {
  id: string;
  price: number;
}
