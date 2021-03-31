import * as moment               from 'moment';
import { Inject, Injectable }    from '@angular/core';
import { IEmployee, ITimeEntry } from '@nx-abi-mgmt/nx-abi-shared';
import { BaseService }           from './base-service';
import { API_CONFIG, ApiConfig } from './api-config';

@Injectable()
export class TimeService extends BaseService {

  constructor(@Inject(API_CONFIG) protected apiConfig: ApiConfig) {
    super(apiConfig);
  }

  getWeeklySheet(user: IEmployee, day: moment.Moment = moment()) {
    if (!user || !user._id) return;
    if (!day) return;

    return this.http.get(`${this.apiConfig.base}/time/week/${user._id}/${day.startOf('isoWeek').format('YYYY-MM-DD')}`).toPromise();
  }

  getMonthlySheet(user: IEmployee, day: moment.Moment = moment()) {
    return this.http.get(`${this.apiConfig.base}/time/month/${user._id}/${day.startOf('isoWeek').format('YYYY-MM-DD')}`).toPromise();
  }

  addTimeEntry(employee: IEmployee, day: moment.Moment, hours: number) {
    if (!employee || !employee._id) return;
    if (!day) return;

    const payload: Partial<ITimeEntry> = {
      day: day.toDate(),
      hours,
      employee,
    }

    return this.http.post(`${this.apiConfig.base}/time`, payload).toPromise();
  }
}
