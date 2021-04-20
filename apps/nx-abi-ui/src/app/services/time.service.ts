import * as moment               from 'moment';
import { Inject, Injectable }    from '@angular/core';
import { IEmployee, ITimeEntry } from '@nx-abi-mgmt/nx-abi-shared';
import { BaseService }           from './base-service';
import { API_CONFIG, ApiConfig } from './api-config';
import { HttpClient }            from '@angular/common/http';

@Injectable()
export class TimeService extends BaseService {

  constructor(@Inject(API_CONFIG) protected apiConfig: ApiConfig, protected httpClient: HttpClient) {
    super(apiConfig, httpClient);
  }

  getWeeklySheet(user: IEmployee, day: moment.Moment = moment()) {
    if (!user || !user.id) return Promise.reject();
    if (!day) return;

    return this.http.get(`${this.apiConfig.base}/time/week/${user.id}/${day.startOf('isoWeek').format('YYYY-MM-DD')}`).toPromise();
  }

  getMonthlySheet(user: IEmployee, day: moment.Moment = moment()) {
    return this.http.get(`${this.apiConfig.base}/time/month/${user.id}/${day.startOf('isoWeek').format('YYYY-MM-DD')}`).toPromise();
  }

  addTimeEntry(employee: IEmployee, day: moment.Moment, hours?: number, details?: string) {
    if (!employee || !employee.id) return;
    if (!day) return;

    const payload: Partial<ITimeEntry> = {
      day: day.toDate(),
      employee,
    }

    if (hours) payload.hours = hours;
    if (details) payload.details = details;

    return this.http.post(`${this.apiConfig.base}/time`, payload).toPromise();
  }
}
