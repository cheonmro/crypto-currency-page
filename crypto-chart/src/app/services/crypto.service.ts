import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CryptoCurrency } from '../crypto-currency.class';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  public topCryptos: CryptoCurrency[];
  public top20Cryptos: CryptoCurrency[];
  public top40Cryptos: CryptoCurrency[];
  public top60Cryptos: CryptoCurrency[];
  public top80Cryptos: CryptoCurrency[];
  public top100Cryptos: CryptoCurrency[];

  constructor(public http: HttpClient) { }

  getAllCryptoCurrency() {
    this.http.get('https://api.coincap.io/v2/assets/').subscribe((assets: any) => {
      const coinAssets = assets.data;
      console.log(coinAssets);
      // get # 1~20 coins
      this.top20Cryptos = coinAssets.filter((eachCoin: any) => {
        if (eachCoin.rank <= 20) {
          return new CryptoCurrency(eachCoin);
        }
      });
      this.topCryptos = this.top20Cryptos;
      console.log(this.topCryptos);

      // get # 21~40 coins
      this.top40Cryptos = coinAssets.filter((eachCoin: any) => {
        if (eachCoin.rank <= 40 && eachCoin.rank >= 21) {
          return new CryptoCurrency(eachCoin);
        }
      });

      // get # 41~60 coins
      this.top60Cryptos = coinAssets.filter((eachCoin: any) => {
        if (eachCoin.rank <= 60 && eachCoin.rank >= 41) {
          return new CryptoCurrency(eachCoin);
        }
      });

      // get # 61~80 coins
      this.top80Cryptos = coinAssets.filter((eachCoin: any) => {
        if (eachCoin.rank <= 80 && eachCoin.rank >= 61) {
          return new CryptoCurrency(eachCoin);
        }
      });

      // get # 81~100 coins
      this.top100Cryptos = coinAssets.filter((eachCoin: any) => {
        if (eachCoin.rank <= 100 && eachCoin.rank >= 81) {
          return new CryptoCurrency(eachCoin);
        }
      });

    });
  }
}
