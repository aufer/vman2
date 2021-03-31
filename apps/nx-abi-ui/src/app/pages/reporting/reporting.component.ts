import * as moment                            from 'moment';
import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmployee }                          from '@nx-abi-mgmt/nx-abi-shared';
import { EmployeeService, TimeService }       from '../../services';

@Component({
  templateUrl: 'reporting.component.html'
})
export class ReportingComponent implements OnInit {
  employees: IEmployee[];
  selectedEmployee: IEmployee;
  formGroup: FormGroup;

  currentDay = moment();

  model: any;

  constructor(private employeeSvc: EmployeeService, private fb: FormBuilder, private timeSvc: TimeService) {
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
    this.timeSvc.getMonthlySheet(this.selectedEmployee, this.currentDay).then(val => {
      console.log(val);
      this.model = val;
    });
  }
}
