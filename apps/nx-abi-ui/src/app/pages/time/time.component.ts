import * as moment                            from 'moment';
import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmployee }                          from '@nx-abi-mgmt/nx-abi-shared';
import { EmployeeService }                    from '../../services';

@Component({
  templateUrl: 'time.component.html'
})
export class TimeComponent implements OnInit {
  employees: IEmployee[];
  selectedEmployee: IEmployee;
  formGroup: FormGroup;

  currentDay = moment();
  weekDays: moment.Moment[] = new Array(7).fill(moment());

  constructor(private employeeSvc: EmployeeService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();

    this.employeeSvc.getEmployees()
      .then((res: { data: IEmployee[] }) => {
        this.employees = res.data;
        this.formGroup.patchValue({employeeSelection: this.employees[0]});
      })
      .catch(error => {
        console.error(error);
      });

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
