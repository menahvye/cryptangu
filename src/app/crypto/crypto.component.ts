import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { Crypto } from '../modeles/crypto';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { SelectcryptoComponent } from '../selectcrypto/selectcrypto.component';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent {

  cryptos: Crypto[] = [];

  constructor(
    private router: Router,
    private cryptoService: CryptoService,
    private sharedService: SharedService
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

    const id = crypto.id;
    const selectcrypto = this.cryptos.find((crypto) => crypto.id === id);
    //console.log(selectcrypto);

    this.sharedService.setSelectedCrypto(crypto);
    this.router.navigate(['/liste', crypto.id]);
  }
}
