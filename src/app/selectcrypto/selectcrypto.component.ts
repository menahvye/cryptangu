import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crypto } from '../modeles/crypto';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-selectcrypto',
  templateUrl: './selectcrypto.component.html',
  styleUrls: ['./selectcrypto.component.scss']
})
export class SelectcryptoComponent {
  
  cryptos: Crypto[] = [];
  selectedCrypto: Crypto | undefined;

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {
    this.selectedCrypto = this.sharedService.getSelectedCrypto()
  }
  
  

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

  }
}
