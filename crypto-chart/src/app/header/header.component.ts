import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public ranks: string[];

  constructor(public cryptoService: CryptoService) {
    this.ranks = this.cryptoService.ranks;
  }

  ngOnInit() {
  }

}
