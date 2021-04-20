import { HttpClient }  from '@angular/common/http';
import { AppInjector } from '../util';
import { ApiConfig }   from './api-config';

export class BaseService {
  protected http: HttpClient;

  constructor(protected apiConfig: ApiConfig, protected httpClient?: HttpClient) {
    const injector = AppInjector.getInjector();
    this.http = httpClient || injector.get(HttpClient);
  }
}
