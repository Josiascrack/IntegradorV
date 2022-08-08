import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../servicios/auth.service';
import { apiURL } from '../servicios/global';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private toast: ToastrService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: any) => {
        if (
          err instanceof HttpErrorResponse &&
          !request.url.includes('auth/login') &&
          err.status === 401
        ) {
          return this.handlingRefresh(request, next);
        }

        return throwError(err);
      })
    );
  }

  private handlingRefresh(request: HttpRequest<unknown>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.getRefresh().pipe(
        switchMap((hola: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(true);
          return next.handle(request);
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        switchMap(() => {
          return next.handle(request);
        })
      );
    }
  }
}
