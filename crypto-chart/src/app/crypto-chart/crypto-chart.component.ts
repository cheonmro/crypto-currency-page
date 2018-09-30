import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.css']
})
export class CryptoChartComponent implements OnInit {
  @Input() type: string;
  @Input() chartData: any;
  @Input() options: any;

  constructor() { }

  ngOnInit() {
  }

}
