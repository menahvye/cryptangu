import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crypto } from '../modeles/crypto';

@Injectable({
    providedIn: 'root'
  })
  export class CryptoService {
  
    constructor(private http: HttpClient) { }
  
    getCryptos(): Observable<Crypto[]> {
        const url = 'https://all-cryptocurrency-list.p.rapidapi.com/v1/cryptocurrency/listings/latest';
        const headers = {
          headers: new HttpHeaders({
            'X-RapidAPI-Key': '9b405b31a1msh7b5c726760d06c4p1f8993jsnddfcdb892eac',
            'X-RapidAPI-Host': 'all-cryptocurrency-list.p.rapidapi.com'
          })
        };
        return this.http.get<Crypto[]>(url, headers);
      }
  }