import { HttpClient }            from '@angular/common/http';
import { Inject, Injectable }    from '@angular/core';
import { BaseService }           from './base-service';
import { API_CONFIG, ApiConfig } from './api-config';

@Injectable()
export class MembersService extends BaseService {

  constructor(@Inject(API_CONFIG) protected apiConfig: ApiConfig, protected httpClient: HttpClient) {
    super(apiConfig, httpClient);
  }

  getAll() {
    return this.http.get(`${this.apiConfig.base}/members`).toPromise();
  }
}
