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
      (response: any) => {
        this.cryptos = response.data;
        //this.cryptos = this.cryptos.slice(0, 50); (LIMITE)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onRowClicked(row: Crypto) {
    console.log(row.id);
  }

}