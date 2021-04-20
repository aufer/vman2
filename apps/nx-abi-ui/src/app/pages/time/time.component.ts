import * as moment           from 'moment';
import { filter, map, tap }  from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router }             from '@angular/router';
import { Store }                              from '@ngrx/store';
import { IEmployee, UserRole }                from '@nx-abi-mgmt/nx-abi-shared';
import { UserService }                        from '../../services/user.service';
import { EmployeesActions, StoreModel }       from '../../store';
import { selectAllEmployees }                 from '../../store/employees/selectors';
import { BasePage }                           from '../../util/base-page';

@Component({
  templateUrl: 'time.component.html'
})
export class TimeComponent extends BasePage implements OnInit {
  employees: IEmployee[];
  selectedEmployee: IEmployee;
  formGroup: FormGroup = new FormGroup({});

  UserRole = UserRole;

  employees$ = this.store.select(selectAllEmployees).pipe(
    map(v => {
      if (this.userService.me && this.userService.me.role === UserRole.EMPLOYEE) {
        return v.filter(emp => emp.user.id === this.userService.me.id);
      }
      return v;
    }),
    tap(employees => {
      this.formGroup.patchValue({employeeSelection: employees[0]})
    }),
  );

  currentDay = moment();
  weekDays: moment.Moment[] = new Array(7).fill(moment());

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router,
    private store: Store<StoreModel>
  ) {
    super(router, route);
  }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(new EmployeesActions.LoadAllRequestAction());
  }

  buildForm() {
    this.formGroup = this.fb.group({
      employeeSelection: ['', Validators.required]
    });

    this.formGroup.valueChanges.subscribe(m => {
      this.selectedEmployee = m.employeeSelection;
    })
  }

  setWeek(direction: 'prev' | 'next' | 'today') {
    if (direction === 'today') {
      this.currentDay = moment();
      return;
    }

    const daysToAdd = direction === 'next' ? 7 : -7;
    this.currentDay = moment(this.currentDay).add(daysToAdd, 'days');
  }
}
