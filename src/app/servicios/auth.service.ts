import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { apiURL } from './global';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  logIn(user: any): Observable<any> {
    console.log(user);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(user.username + ':' + user.password),
    });
    return this.http.post<any>(
      `${apiURL}/auth/login`,
      {},
      {
        headers,
        withCredentials: true,
      }
    );
  }

  logOut() {
    return this.http.post(
      `${apiURL}/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );
  }

  getModules(): Observable<any> {
    return this.http.get<any>(`${apiURL}/users/access`, {
      withCredentials: true,
    });
  }

  getProfile(){
    return this.http.post<any>(`${apiURL}/auth/me`, {
      withCredentials: true,
    });
  }

  getRefresh(): Observable<any> {
    return this.http.post<any>(`${apiURL}/auth/refresh`, {
      withCredentials: true,
    });
  }
}
