import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable }                                               from 'rxjs';
import { HttpClient }                                               from '@angular/common/http';
import { Injectable }                                               from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private http: HttpClient) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.http.get(`//localhost:3333/api/users/me`).toPromise().then(v => {
      return true;
    })
  }
}
