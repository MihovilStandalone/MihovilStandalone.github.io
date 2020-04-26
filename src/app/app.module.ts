import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {DelikateseComponent} from './mant/delikatese/delikatese.component';
import {NavbarComponent} from './mant/navbar/navbar.component';
import {AboutUsComponent} from './mant/about-us/about-us.component';
import {ContactComponent} from './mant/contact/contact.component';
import {VeleprodajaComponent} from './mant/veleprodaja/veleprodaja.component';
import { MaloprodajaComponent } from './mant/maloprodaja/maloprodaja.component';

@NgModule({
  declarations: [
    AppComponent,
    DelikateseComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactComponent,
    VeleprodajaComponent,
    MaloprodajaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'delikatese', pathMatch: 'full'},
      {path: 'delikatese', component: DelikateseComponent},
      {path: 'o-nama', component: AboutUsComponent}, {path: 'kontakt', component: ContactComponent},
      {path: 'veleprodaja', component: VeleprodajaComponent},
      {path: 'maloprodaja', component: MaloprodajaComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
