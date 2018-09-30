import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.css']
})
export class CryptoTableComponent implements OnInit {
  @Output() coin = new EventEmitter();

  constructor(public cryptoService: CryptoService) {
    this.cryptoService.getAllCryptoCurrency();
  }

  ngOnInit() {
  }

}
