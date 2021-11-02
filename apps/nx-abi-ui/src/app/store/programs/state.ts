import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IProgram }                                        from '@nx-abi-mgmt/nx-abi-shared';
import { LoadState }   from '../../util';

export const programsAdapter: EntityAdapter<IProgram> = createEntityAdapter({
  selectId: model => model.id,
  sortComparer: (a, b) => b.id.localeCompare(a.id),
});

export interface State extends EntityState<IProgram> {
  loadState?: LoadState;
  error?: any;
}

export const initialState: State = programsAdapter.getInitialState({
  loadState: 'empty',
  error: null,
});
