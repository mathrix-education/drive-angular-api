import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UrlCatcherService} from '../services/url-catcher.service';

@Injectable({
  providedIn: 'root'
})
export class HttpValidatorInterceptor implements HttpInterceptor {


  constructor(private urlCatcher: UrlCatcherService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap((response: HttpEvent<any>) => {
        console.log(typeof response);
        if (response instanceof HttpResponse) {
          this.urlCatcher.requests.push({url: response.url, status: response.status});
        }
      }, response => {
        this.urlCatcher.requests.push({url: response.url, status: response.status});
      })
    );
  }
}
