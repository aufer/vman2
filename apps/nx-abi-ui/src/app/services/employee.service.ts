import { Inject, Injectable }    from '@angular/core';
import { BaseService }           from './base-service';
import { API_CONFIG, ApiConfig } from './api-config';

@Injectable()
export class EmployeeService extends BaseService {

  constructor(@Inject(API_CONFIG) protected apiConfig: ApiConfig) {
    super(apiConfig);
  }

  getEmployees() {
    return this.http.get(`${this.apiConfig.base}/employees`).toPromise();
  }
}
