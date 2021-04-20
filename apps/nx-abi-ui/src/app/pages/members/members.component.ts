import { Component }                  from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router';
import { Store }                      from '@ngrx/store';
import { IMember }                    from '@nx-abi-mgmt/nx-abi-shared';
import { AppStoreModule }             from '../../store';
import { PageWithTable, TableConfig } from '../../util';
import { of }                         from 'rxjs';

@Component({
  templateUrl: 'members.component.html',
})
export class MembersComponent extends PageWithTable<IMember> {

  private _tableConfig: TableConfig<IMember> = {
    hiddenColumns: ['id', 'sepaRef', 'street', 'streetNo', 'addition', 'postCode', 'bic', 'phone', 'email', 'premium', 'iban', 'birthDate', 'mobile'],
    columnConfigs: [
      {name: 'joined', isDate: true},
      {name: 'email', isLink: true, linkPrefix: 'mailto'},
      {name: 'phone', isLink: true, linkPrefix: 'tel'},
      {name: 'mobile', isLink: true, linkPrefix: 'tel'},
    ]
  }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected store: Store<AppStoreModule>
  ) {
    super(store, router, route);
  }

  get name() {
    return 'members'
  }

  get tableConfig() {
    return of(this._tableConfig);
  }
}
