import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyDynamic1Component } from './my-dynamic1/my-dynamic1.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDynamic1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
