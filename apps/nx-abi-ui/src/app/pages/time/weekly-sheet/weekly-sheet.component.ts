import * as moment                                from 'moment';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup }                 from '@angular/forms';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { Store }                                  from '@ngrx/store';
import { IEmployee }                              from '@nx-abi-mgmt/nx-abi-shared';
import { TimeService }                            from '../../../services';
import { TimesheetActions }                       from '../../../store/timesheet';
import { StoreModel }                             from '../../../store';
import { DateUtils }                              from '../../../util';

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

  model$ = this.store.select('timesheet').pipe(
    map(m => m.entity),
    filter(v => !!v),
    distinctUntilChanged(),
    tap(m => this.weekUpdate.next(m.days.map(m => moment(m)))),
    tap(m => this.buildForm(m)),
  );
  formGroup: FormGroup = new FormGroup({});
  dateUtils = DateUtils;

  constructor(private timeSvc: TimeService, private fb: FormBuilder, private store: Store<StoreModel>) {
  }

  get sum$() {
    return this.model$.pipe(
      map(m => Object.values(m.entries).reduce((s, e) => s + e.hours, 0))
    );
  }

  getWeeklySheet() {
    if (!this._employee || !this._currentDay) return;

    this.store.dispatch(new TimesheetActions.LoadRequestAction({employee: this._employee, day: this._currentDay}));
  }

  updateTime(time, day) {
    this.store.dispatch(new TimesheetActions.UpdateRequestAction({employee: this.employee, day: moment(day), hours: time}));
  }

  updateComment(comment, day) {
    this.store.dispatch(new TimesheetActions.UpdateRequestAction({employee: this.employee, day: moment(day), details: comment}));
  }

  private buildForm(model) {
    const g = model.days.reduce((s, v) => ({
      ...s,
      [v]: [model.entries[v] ? model.entries[v].details : '']
    }), {});
    this.formGroup = this.fb.group(g)
  }
}
