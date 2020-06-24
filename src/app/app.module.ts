import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DelikateseComponent } from './mant/delikatese/delikatese.component';
import { NavbarComponent } from './mant/navbar/navbar.component';
import { ContactComponent } from './mant/contact/contact.component';
import { VeleprodajaComponent } from './mant/veleprodaja/veleprodaja.component';
import { MaloprodajaComponent } from './mant/maloprodaja/maloprodaja.component';

@NgModule({
	declarations: [
		AppComponent,
		DelikateseComponent,
		NavbarComponent,
		ContactComponent,
		VeleprodajaComponent,
		MaloprodajaComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{ path: '', component: DelikateseComponent },
			{ path: 'delikatese', component: DelikateseComponent },
			{ path: 'kontakt', component: ContactComponent },
			{ path: 'veleprodaja', component: VeleprodajaComponent },
			{ path: 'maloprodaja', component: MaloprodajaComponent }])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
