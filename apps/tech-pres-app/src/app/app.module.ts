import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ImgCardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
