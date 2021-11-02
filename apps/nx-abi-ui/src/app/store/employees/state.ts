import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IEmployee }                                       from '@nx-abi-mgmt/nx-abi-shared';
import { LoadState }                                       from '../../util';

export const employeesAdapter: EntityAdapter<IEmployee> = createEntityAdapter({
  selectId: model => model.id,
  sortComparer: (a: IEmployee, b: IEmployee) => b.id.localeCompare(a.id),
});

export interface State extends EntityState<IEmployee> {
  loadState?: LoadState;
  error?: any;
}

export const initialState: State = employeesAdapter.getInitialState({
  loadState: 'empty',
  error: null,
});
