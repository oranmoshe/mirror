import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {BodyComponent} from './body/body.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class HomeModule { }
