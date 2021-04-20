import { Component, OnInit }                    from '@angular/core';
import { ActivatedRoute, Router }               from '@angular/router';
import { Store }                                from '@ngrx/store';
import { IEmployee }                            from '@nx-abi-mgmt/nx-abi-shared';
import { HttpClient }                           from '@angular/common/http';
import { PageWithTable, TableConfig }           from '../../util';
import { AppStoreModule }                       from '../../store';
import { EmployeesActions, EmployeesSelectors } from '../../store/employees';
import { Observable, of }                       from 'rxjs';

@Component({
  templateUrl: 'employees.component.html'
})
export class EmployeesComponent extends PageWithTable<IEmployee> implements OnInit {
  private _tableConfig: TableConfig<IEmployee> = {
    columnConfigs: [{
      name: 'birthDate',
      isDate: true,
    }, {
      name: 'startDate',
      isDate: true,
    }],
    hiddenColumns: ['id', 'email', 'phone', 'postCode', 'street', 'streetNo', 'iban', 'bic', 'eTin', 'rvNumber'],
  };

  loadState$ = this.store.select(EmployeesSelectors.selectEmployeesLoadState);

  constructor(protected http: HttpClient, protected router: Router, protected route: ActivatedRoute, protected store: Store<AppStoreModule>) {
    super(store, router, route);
  }

  ngOnInit() {
    this.store.dispatch(new EmployeesActions.LoadAllRequestAction());
  }

  get tableConfig(): Observable<TableConfig<IEmployee>> {
    return of(this._tableConfig);
  }

  get name() {
    return 'employees';
  }
}
