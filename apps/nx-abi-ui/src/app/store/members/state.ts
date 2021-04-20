import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IMember }                                         from '@nx-abi-mgmt/nx-abi-shared';
import { LoadState }                                       from '../../util';

export const membersAdapter: EntityAdapter<IMember> = createEntityAdapter({
  selectId: model => model.id,
  sortComparer: (a: IMember, b: IMember) => b.id.localeCompare(a.id),
});

export interface State extends EntityState<IMember> {
  loadState?: LoadState;
  error?: any;
}

export const initialState: State = membersAdapter.getInitialState({
  loadState: 'empty',
  error: null,
});
