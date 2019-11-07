import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {API_CONFIG} from 'api';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {HttpValidatorInterceptor} from './interceptors/http-validator.interceptor';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: API_CONFIG, useValue: 'https://dev.api.mathrixdrive.fr/'},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpValidatorInterceptor, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
