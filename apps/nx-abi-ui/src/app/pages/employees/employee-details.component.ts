import { Component }          from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { HttpClient }         from '@angular/common/http';
import { Store }              from '@ngrx/store';
import { IEmployee }          from '@nx-abi-mgmt/nx-abi-shared';
import { AppStoreModule }     from '../../store/store.module';
import { EmployeesSelectors } from '../../store/employees';

@Component({
  templateUrl: 'employee-details.component.html'
})
export class EmployeeDetailsComponent {
  employee: IEmployee;

  constructor(private route: ActivatedRoute, private http: HttpClient, private store: Store<AppStoreModule>) {
    const id = route.snapshot.paramMap.get('id');
    store.select(EmployeesSelectors.selectEmployeeById(id)).subscribe(m => this.employee = m);
  }
}
