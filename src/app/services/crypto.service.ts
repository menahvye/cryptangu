import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crypto } from '../modeles/crypto';

@Injectable({
    providedIn: 'root'
  })
  export class CryptoService {
  
    constructor(private http: HttpClient) { }
  
    getCryptos(): Observable<Crypto[]> {
        const url = 'https://api.coinpaprika.com/v1/coins';
        const options = {
          params: new HttpParams().set('limit', '50')
        };
        return this.http.get<Crypto[]>(url);
      }
  }