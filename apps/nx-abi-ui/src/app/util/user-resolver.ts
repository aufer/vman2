import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IUser }                                                from '@nx-abi-mgmt/nx-abi-shared';
import { HttpClient }                                           from '@angular/common/http';
import { Injectable }                                           from '@angular/core';
import { UserService }                                          from '../services/user.service';

@Injectable({providedIn: 'root'})
export class UserResolver implements Resolve<IUser> {

  constructor(private http: HttpClient, private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser {
    return this.userService.me;
  }
}
