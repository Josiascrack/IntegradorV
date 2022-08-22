import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { apiURL } from './global';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  modules: any = [];
  logIn(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(user.username + ':' + user.password),
    });
    return this.http.post<any>(
      `${apiURL}/auth/login`,
      {},
      {
        headers,
      }
    );
  }

  logOut() {
    return this.http.post(`${apiURL}/auth/logout`, {});
  }

  getModules(): Observable<any> {
    return this.modules.length == 0
      ? this.http.get<any>(`${apiURL}/users/access`, {}).pipe(
          map((data) => {
            this.modules = data;
            return data;
          }),
          catchError((err) => {
            return throwError(() => err);
          })
        )
      : of(this.modules);
  }

  getProfile() {
    return this.http.post<any>(`${apiURL}/auth/me`, {});
  }

  getRefresh(): Observable<any> {
    return this.http.post<any>(`${apiURL}/auth/refresh`, {});
  }

  validateToken(): Observable<any> {
    return this.http.post<any>(`${apiURL}/auth/validate`, {});
  }
}
