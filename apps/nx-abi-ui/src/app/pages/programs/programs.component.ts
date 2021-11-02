import { Component }                  from '@angular/core';
import { PageWithTable, TableConfig } from '../../util';
import { IProgram }                   from '@nx-abi-mgmt/nx-abi-shared';
import { of }                         from 'rxjs';
import { ActivatedRoute, Router }     from '@angular/router';
import { Store }                      from '@ngrx/store';
import { AppStoreModule }             from '../../store';
import { LoadAllRequestAction }       from '../../store/programs/actions';
import { ProgramsSelectors }          from '../../store/programs';

@Component({
  templateUrl: 'programs.component.html'
})
export class ProgramsComponent extends PageWithTable<IProgram> {

  _tableConfig: TableConfig<IProgram> = {
    hiddenColumns: [],
    columnConfigs: [
      {name: 'name'},
      {name: 'startDate', isDate: true},
      {name: 'endDate', isDate: true},
    ],
  }

  loadState$ = this.store.select(ProgramsSelectors.selectProgramsLoadState);

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected store: Store<AppStoreModule>
  ) {
    super(store, router, route);

    this.store.dispatch(new LoadAllRequestAction());
  }

  get name() {
    return 'programs';
  }

  get tableConfig() {
    return of(this._tableConfig);
  }
}
