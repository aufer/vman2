import { distinctUntilChanged, distinctUntilKeyChanged, filter, map, tap } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component }                              from '@angular/core';
import { Store }                                   from '@ngrx/store';
import { MembersActions, selectorMap, StoreModel } from '../../../store';
import { IMember }                                 from '../../../../../../../libs/nx-abi-shared/src/lib/model';
import { TableConfig }                             from '../../../util';

@Component({
  templateUrl: 'members-report.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersReportComponent {
  model$ = this.store.select(selectorMap['members'].all);

  constructor(private store: Store<StoreModel>) {
    store.dispatch(new MembersActions.LoadAllRequestAction());
  }

  get memberByLocationTableConfig() {
    return {
      hiddenColumns: [],
      columnConfigs: []
    } as TableConfig<{key: string, value: string}>
  }

  get memberyByLocation$() {
    return this.model$.pipe(
      filter(t => !!t && t.length > 0),
      map((members: IMember[]) => {
        return members.reduce((s, v) => {
          const key = v.location ? v.location : 'n/a';
          const index = s.findIndex(elem => elem.key === key);
          if (index >= 0) {
            s[index].value = s[index].value + 1;
            return s;
          }
          s.push({key, value: 1});
          return s;
        }, []);
      }),
      tap(s => console.log('getMemberByLocation$', s)),
    );
  }
}
