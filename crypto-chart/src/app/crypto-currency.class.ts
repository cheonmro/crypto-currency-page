export class CryptoCurrency {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  supply: number;
  maxSupply: number;
  marketCapUsd: number;
  volumeUsd24Hr: number;
  priceUsd: number;
  changePercent24Hr: number;
  vwap24Hr: number;

  constructor(data?: any) {
    const defaults: any = {
      ...data
    };

    this.id = defaults.id;
    this.rank = Number(defaults.rank);
    this.symbol = defaults.symbol;
    this.name = defaults.name;
    this.supply = Number(defaults.supply);
    this.maxSupply = Number(defaults.maxSupply);
    this.marketCapUsd = Number(defaults.marketCapUsd);
    this.volumeUsd24Hr = Number(defaults.volumeUsd24Hr);
    this.priceUsd = Number(defaults.priceUsd);
    this.changePercent24Hr = Number(defaults.changePercent24Hr);
    this.vwap24Hr = Number(defaults.vwap24Hr);
  }
}
