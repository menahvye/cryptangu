import { Injectable } from '@angular/core';
import { Crypto } from '../modeles/crypto';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  selectedCrypto: Crypto | undefined;
  constructor() { }

  setSelectedCrypto(crypto: Crypto) {
    this.selectedCrypto = crypto;
  }

  getSelectedCrypto(): Crypto | undefined {
    return this.selectedCrypto;
  }
}
