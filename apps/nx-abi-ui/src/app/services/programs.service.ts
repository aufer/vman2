import { BaseService }           from './base-service';
import { Inject, Injectable }    from '@angular/core';
import { API_CONFIG, ApiConfig } from './api-config';
import { HttpClient }            from '@angular/common/http';

@Injectable()
export class ProgramsService extends BaseService {
  constructor(@Inject(API_CONFIG) protected apiConfig: ApiConfig, protected httpClient: HttpClient) {
    super(apiConfig, httpClient);
  }

  getAll() {
    return this.http.get(`${this.apiConfig.base}/programs`).toPromise();
  }
}
