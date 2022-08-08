import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authService.getModules().pipe(
      map((modules) => {
        console.log(modules);
        if (!modules.map((m: any) => m.ruta).includes(childRoute.url[0].path)) {
          return this.router.parseUrl('/dashboard');
        }
        return true;
      }),
      catchError((err) => {
        return of(this.router.parseUrl('/dashboard'));
      })
    );
  }
}
