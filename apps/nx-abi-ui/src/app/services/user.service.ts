import { HttpClient }            from '@angular/common/http';
import { IUser }                 from '@nx-abi-mgmt/nx-abi-shared';
import { Inject, Injectable }    from '@angular/core';
import { API_CONFIG, ApiConfig } from './api-config';

@Injectable()
export class UserService {
   private _user: IUser

  constructor(private http: HttpClient, @Inject(API_CONFIG) protected apiConfig: ApiConfig) {
    this.http.get(`${apiConfig.base}/users/me`).toPromise().then(v => this._user = v as IUser);
  }

  get me() {
     return this._user;
  }
}
