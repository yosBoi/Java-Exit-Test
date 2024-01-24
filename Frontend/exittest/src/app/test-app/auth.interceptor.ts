
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private service: ServicesService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = request;
    const token = this.service.getToken();

    if(token != null){
      authReq = authReq.clone({
        setHeaders:{Authorization: `Bearer ${token}`},
      })
    }


    return next.handle(authReq);
  }
}

export const authInterceptorProviders=[
  {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true,
  },
]
