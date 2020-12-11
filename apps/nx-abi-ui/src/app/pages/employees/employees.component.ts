import { Component }  from '@angular/core';
import { IEmployee }  from '@nx-abi-mgmt/nx-abi-shared';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'employees.component.html'
})
export class EmployeesComponent {
  employees: IEmployee[];

  constructor(private http: HttpClient) {
    this.http.get('//localhost:3333/api/employees').toPromise().then((res: { data: IEmployee[] }) => {
      this.employees = res.data;
    });
  }
}
