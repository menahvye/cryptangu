import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoComponent } from './crypto/crypto.component';
import { PageIntrouvableComponent } from './page-introuvable/page-introuvable.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';

const routes: Routes = [
  {  path: '', component: PageAccueilComponent },
  {  path: 'liste', component: CryptoComponent },
  {  path: '**', component: PageIntrouvableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
