import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { Crypto } from '../modeles/crypto';
@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent {
  cryptos: Crypto[] = [];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoService.getCryptos().subscribe(
      (cryptos) => {
        this.cryptos = Object.values(cryptos);
        console.log(this.cryptos);
        //this.cryptos = this.cryptos.slice(0, 50); (LIMITE)
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
