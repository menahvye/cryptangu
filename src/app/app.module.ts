import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoComponent } from './crypto/crypto.component';

import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
// MATERIAL
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatTableModule} from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PageIntrouvableComponent } from './page-introuvable/page-introuvable.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { SelectcryptoComponent } from './selectcrypto/selectcrypto.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent,
    PageIntrouvableComponent,
    PageAccueilComponent,
    SelectcryptoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    NoopAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
