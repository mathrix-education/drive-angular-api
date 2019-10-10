import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {API_CONFIG} from 'api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {provide: API_CONFIG, useValue: 'https://dev.api.mathrixdrive.fr/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
