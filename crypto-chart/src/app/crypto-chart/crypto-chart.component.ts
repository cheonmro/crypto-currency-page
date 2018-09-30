import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.css']
})
export class CryptoChartComponent implements OnInit {
  @Input() type: string;
  @Input() chartData: object;
  @Input() options: object;

  public historyDays: string[] = ['All', '365', '180', '90', '30', '7', '1'];
  public selectedDay = 'All';

  @Output() days = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeSelectedDay(day: string) {
    this.selectedDay = day;
  }

}
