import { Component }     from '@angular/core';
import { IEmployee }     from '@nx-abi-mgmt/nx-abi-shared';
import { HttpClient }                 from '@angular/common/http';
import { PageWithTable, TableConfig } from '../../util';
import { Router }                     from '@angular/router';

@Component({
  templateUrl: 'employees.component.html'
})
export class EmployeesComponent extends PageWithTable<IEmployee>{

  constructor(protected http: HttpClient, protected router: Router) {
    super(http, router)
  }

  get tableConfig(): TableConfig<IEmployee> {
    return {
      columnConfigs: [{
        name: 'birthDate',
        isDate: true,
      }, {
        name: 'startDate',
        isDate: true,
      }],
      hiddenColumns: [],
    }
  }

  get name() {
    return 'employees';
  }
}
