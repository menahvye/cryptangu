import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { Crypto } from '../modeles/crypto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent {

  cryptos: Crypto[] = [];
  selectedCrypto: Crypto | undefined;

  constructor(
    private router: Router,
    private cryptoService: CryptoService
  ) {}

  ngOnInit() {
    this.cryptoService.getCryptos().subscribe(
      (response: any) => {
        this.cryptos = response.data;
        //this.cryptos = this.cryptos.slice(0, 50); (LIMITE)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onRowClicked(crypto: Crypto) {
    this.selectedCrypto = crypto;
  }
}
