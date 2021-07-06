import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    private url = environment.base_url;

  constructor(private http: HttpClient, private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(user): Observable<any>{
    return this.http.post(`${this.url}/login_check`, user)
    .pipe(map(user => {
      // store user details and jwt token in local storage
      //to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      console.log(user);
      return user;
  })); 
  }
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    localStorage.removeItem('prenom');
    localStorage.removeItem('token');
    localStorage.removeItem('color1');
    localStorage.removeItem('color2');
    localStorage.removeItem('color3');
    localStorage.removeItem('colora');
    localStorage.removeItem('colorb');
    localStorage.removeItem('colorc');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
}
}
