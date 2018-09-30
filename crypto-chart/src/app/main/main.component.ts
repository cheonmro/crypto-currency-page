import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public type: string;
  public chartData: object;
  public options: object;
  public dates: string[];
  public prices: number[];
  public coinSymbol = 'BTC';
  public coinName = 'Bitcoin';

  constructor(public http: HttpClient) {
    // get initial chart(bitcoin)
    this.getCoinChart();
  }

  ngOnInit() {
  }

  convertDates(data: any) {
    this.dates = data.price.map(element => {
      const eachDate = new Date(element[0]);
        return `${eachDate.getFullYear()}/${eachDate.getMonth()}/${eachDate.getDay()}`;
    });
    console.log(this.dates);
  }

  convertPrices(data: any) {
    this.prices = data.price.map(elem => {
      const eachPrice = elem[1];
        return eachPrice;
    });
  }

  coinChart(crytoName: string) {
    if (this.dates) {
      console.log('got chart here is');

      // -- coin chart starts --
      this.type = 'line';
      this.chartData = {
        // this.dates = string[]
        labels: [...this.dates], // ...this.dates
        datasets: [
          {
            label: `${crytoName} price`,
            data: [...this.prices], // ...this.prices
            borderColor: 'rgb(255, 99, 132)'
          }
        ]
      };
      this.options = {
        responsive: true,
        maintainAspectRatio: false,

        // animation: {
        //   duration: 1000,
        //   onProgress: function(animation) {
        //     this.val = animation.currentStep / animation.numSteps;
        //   },
        //   onComplete: function() {
        //     window.setTimeout(function() {
        //       this.val = 1;
        //     }, 1000);
        //   }
        // }

      };
      // -- coin chart ends --

    } // if (this.dates)

  }

  // get a chart from api of coin clicked
  getCoinChart() {
    this.http.get(`http://coincap.io/history/${this.coinSymbol}`).subscribe(element => {
      this.convertDates(element);
      this.convertPrices(element);
      this.coinChart(this.coinName);
    },
    error => {
      // alert('can\'t get all days data');
      console.log('can\'t get all days data');
    }
    );
  }

  // when clicking a coin name in the table
  showCoinChart(crypto: any) {
    this.coinSymbol = crypto.symbol;
    this.coinName = crypto.name;
    this.getCoinChart();
  }

  // when clicking a days among days buttons
  showDaysChart(days: string) {
    days === 'All' ? this.getCoinChart() :
    this.http.get(`http://coincap.io/history/${days}day/${this.coinSymbol}`).subscribe(element => {
      this.convertDates(element);
      this.convertPrices(element);
      this.coinChart(this.coinName);
    },
    error => {
      // alert(`can't get ${days}days data`);
      console.log(`can't get ${days}days data`);
    }
    );
  }

}
