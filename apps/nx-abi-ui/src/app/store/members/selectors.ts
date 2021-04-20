import { membersAdapter, State }                                   from './state';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IMember }                                                 from '@nx-abi-mgmt/nx-abi-shared';

export const getError = (state: State) => state.error;

export const getLoadState = (state: State) => state.loadState;

export const selectMembersState: MemoizedSelector<object, State> = createFeatureSelector('members');

export const selectAllMembers = membersAdapter.getSelectors(selectMembersState).selectAll;

export const selectMemberById = (id: string) => createSelector(selectAllMembers, (members: IMember[]) => {
  if (!members) return null;
  return members.find(m => m.id === id);
});

export const selectMembersError: MemoizedSelector<IMember, any> = createSelector(selectMembersState, getError);

export const selectMembersLoadingState: MemoizedSelector<IMember, any> = createSelector(selectMembersState, getLoadState);
