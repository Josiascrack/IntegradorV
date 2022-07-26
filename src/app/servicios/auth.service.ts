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
    return this.http.post<any>(`${apiURL}/auth/login`, user);
  }

  saveToken(data: any) {
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
  }
  getTokenPayload() {
    const token = this.getToken();

    if (token) {
      return JSON.parse(atob(token.split('.')[1]));
    }
  }

  getToken() {
    const token = localStorage.getItem('token');

    if (token) {
      return token;
    }

    return this.logOut();
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/login']);
  }

  getModules(role: string): Observable<any> {
    return this.http.get<any>(`${apiURL}/users/access/${role}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getLoggedUserName() {
    return this.getTokenPayload().usuario.username;
  }
}
