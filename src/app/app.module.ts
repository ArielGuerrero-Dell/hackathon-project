import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopTenAccordionComponent } from './top-ten-accordion/top-ten-accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { TrueAbilityErgCardComponent } from './true-ability-erg-card/true-ability-erg-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopTenAccordionComponent,
    CarouselComponent,
    FooterBarComponent,
    TrueAbilityErgCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
