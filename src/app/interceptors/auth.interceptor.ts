import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../servicios/auth.service';
import { apiURL } from '../servicios/global';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private toast: ToastrService,
    private router: Router
  ) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err:any) => {
        if (
          err instanceof HttpErrorResponse &&
          !request.url.includes('auth/login')
        ) {
          if (err.status === 401) {
            console.log('getoutted');
            return this.authService.logOut().pipe(switchMap((data:any) => {
              this.router.navigate(["/login"])
              return next.handle(request);
            }));
          }
        }

        return throwError(err);
      })
    );
  }

  handleRefresh(request: HttpRequest<any>, next: HttpHandler) {
    console.log('you just got there');
    return this.authService.getRefresh().pipe(
      switchMap((data:any) => {
        console.log('refresh data', data);
        return next.handle(request);
      }),
      catchError((err:any) => {
        this.isRefreshing = false;
        this.authService.logOut().subscribe((e) => {
          this.toast.error('Unauthorized');
        });
        return throwError(err);
      })
    );
  }
}
