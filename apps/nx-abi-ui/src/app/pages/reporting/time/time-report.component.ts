import * as moment                            from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit }                  from '@angular/core';
import { DateUtils }                          from '../../../util';
import { EmployeeService, TimeService }       from '../../../services';
import { IEmployee, ITimeEntry }              from '../../../../../../../libs/nx-abi-shared/src/lib/model';

declare type ViewModel = { entries: { [key: string]: ITimeEntry } };

@Component({
  templateUrl: 'time-report.component.html'
})
export class TimeReportComponent implements OnInit {
  employees: IEmployee[];
  selectedEmployee: IEmployee;
  formGroup: FormGroup;

  currentDay = moment();

  model: ViewModel;
  dateUtils = DateUtils;

  constructor(private employeeSvc: EmployeeService, private fb: FormBuilder, private timeSvc: TimeService) {
  }

  ngOnInit() {
    this.buildForm();

    this.employeeSvc.getAll()
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
      this.getReport();
    });
  }

  get sum() {
    if (!this.model) return 0;

    return Object.values(this.model.entries).filter(e => e.hours).reduce((sum, e) => sum + e.hours, 0);
  }

  setMonth(direction: 'prev' | 'next' | 'today') {
    if (direction === 'today') {
      this.currentDay = moment();
    } else {
      const monthsToAdd = direction === 'next' ? 1 : -1;
      this.currentDay = moment(this.currentDay).add(monthsToAdd, 'month');
    }

    this.getReport();
  }

  private getReport() {
    this.timeSvc.getMonthlySheet(this.selectedEmployee, this.currentDay).then((val: ViewModel) => {
      this.model = val;
    });
  }
}
