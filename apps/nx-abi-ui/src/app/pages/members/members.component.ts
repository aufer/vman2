import { HttpClient }                 from '@angular/common/http';
import { Component }                  from '@angular/core';
import { Router }                     from '@angular/router';
import { IMember }                    from '@nx-abi-mgmt/nx-abi-shared';
import { PageWithTable, TableConfig } from '../../util';

@Component({
  templateUrl: 'members.component.html',
})
export class MembersComponent extends PageWithTable<IMember> {

  private _tableConfig: TableConfig<IMember> = {
    hiddenColumns: ['sepaRef', 'street', 'streetNo', 'addition', 'postCode', 'bic'],
    columnConfigs: [
      {name: 'joined', isDate: true},
      {name: 'email', isLink: true, linkPrefix: 'mailto'},
      {name: 'phone', isLink: true, linkPrefix: 'tel'},
      {name: 'mobile', isLink: true, linkPrefix: 'tel'},
    ]
  }

  constructor(protected http: HttpClient, protected router: Router) {
    super(http, router);
  }

  get name() {
    return 'members'
  }

  get tableConfig() {
    return this._tableConfig;
  }
}
