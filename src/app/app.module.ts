import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopTenAccordionComponent } from './top-ten-accordion/top-ten-accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopTenAccordionComponent,
    CarouselComponent,
    FooterBarComponent,
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
