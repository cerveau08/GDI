import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService {

  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     //tslint:disable-next-line:prefer-const
    let currentUser = this.authService.currentUserValue;
   // const isLoggedIn = currentUser && currentUser.token;
    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
     });
    }
    return next.handle(req);
  }
}
