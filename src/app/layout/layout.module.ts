import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BodyComponent} from './body/body.component';
import {HeaderComponent} from './header/header.component';
import {LayoutComponent} from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class LayoutModule { }
