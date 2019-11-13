import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app.component';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {API_CONFIG} from '../../../api/src/lib/api-config';
import {DriveApiModule} from '../../../api/src/lib/drive-api.module';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DriveApiModule.withConfig({api: environment.api}),
  ],
  providers: [
    {provide: API_CONFIG, useValue: environment.api},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
