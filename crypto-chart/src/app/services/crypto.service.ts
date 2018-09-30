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

  public ranks: string[] = ['1~20', '21~40', '41~60', '61~80', '81~100'];
  public selectedRank = '1~20';

  constructor(public http: HttpClient) { }

  getAllCryptoCurrency() {
    this.http.get('https://api.coincap.io/v2/assets/').subscribe((assets: any) => {
      const coinAssets = assets.data;
      // get # 1~20 coins
      this.top20Cryptos = coinAssets.filter(eachCoin => {
        if (eachCoin.rank <= 20) {
          return new CryptoCurrency(eachCoin);
        }
      });
      this.topCryptos = this.top20Cryptos;

      // get # 21~40 coins
      this.top40Cryptos = coinAssets.filter(eachCoin => {
        if (eachCoin.rank <= 40 && eachCoin.rank >= 21) {
          return new CryptoCurrency(eachCoin);
        }
      });

      // get # 41~60 coins
      this.top60Cryptos = coinAssets.filter(eachCoin => {
        if (eachCoin.rank <= 60 && eachCoin.rank >= 41) {
          return new CryptoCurrency(eachCoin);
        }
      });

      // get # 61~80 coins
      this.top80Cryptos = coinAssets.filter(eachCoin => {
        if (eachCoin.rank <= 80 && eachCoin.rank >= 61) {
          return new CryptoCurrency(eachCoin);
        }
      });

      // get # 81~100 coins
      this.top100Cryptos = coinAssets.filter(eachCoin => {
        if (eachCoin.rank <= 100 && eachCoin.rank >= 81) {
          return new CryptoCurrency(eachCoin);
        }
      });

    });
  }

  // when clicking a # rank button in header
  changeRankingTable(rank: string) {
    this.selectedRank = rank;
    this.selectedRank === '1~20' ? this.topCryptos = this.top20Cryptos :
    this.selectedRank === '21~40' ? this.topCryptos = this.top40Cryptos :
    this.selectedRank === '41~60' ? this.topCryptos = this.top60Cryptos :
    this.selectedRank === '61~80' ? this.topCryptos = this.top80Cryptos :
    this.selectedRank === '81~100' ? this.topCryptos = this.top100Cryptos : this.topCryptos = this.topCryptos;
  }

}
