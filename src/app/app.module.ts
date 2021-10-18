import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Lab6ItemsComponent } from './lab6-items/lab6-items.component';

@NgModule({
  declarations: [
    AppComponent,
    Lab6ItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
