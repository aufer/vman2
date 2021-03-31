import * as moment                                        from 'moment';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimeService }                                    from '../../../services';
import { IEmployee }                from '@nx-abi-mgmt/nx-abi-shared';

@Component({
  selector: 'time-weekly',
  templateUrl: 'weekly-sheet.component.html'
})
export class WeeklySheetComponent {
  private _employee: IEmployee;
  private _currentDay = moment();

  @Input()
  set employee(employee) {
    if (!employee) return;
    this._employee = employee;
    this.getWeeklySheet();
  }

  get employee() {
    return this._employee;
  }

  @Input()
  set day(day) {
    if (!day) return;
    this._currentDay = day;
    this.getWeeklySheet();
  }

  get day() {
    return this._currentDay;
  }

  @Output()
  weekUpdate = new EventEmitter<moment.Moment[]>();

  model: any;

  constructor(private timeSvc: TimeService) {
  }

  isInFuture(day) {
    return moment(day).isAfter(moment(), 'days');
  }

  isToday(day) {
    return moment(day).isSame(moment(), 'days');
  }

  getWeeklySheet() {
    if (!this._employee || !this._currentDay) return;
    this.timeSvc.getWeeklySheet(this._employee, this._currentDay).then((res: any) => {
      this.model = res.data;
      this.weekUpdate.next(this.model.days.map(m => moment(m)));
    });
  }

  updateTime(time, day) {
    console.log(time, day, this.employee);

    this.timeSvc.addTimeEntry(this.employee, moment(day), time).then(val => {
      console.log(val);
    }).catch(err => console.error(err));
  }
}
