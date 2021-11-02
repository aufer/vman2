import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { programsAdapter, State }                                  from './state';
import { IProgram }                                from '@nx-abi-mgmt/nx-abi-shared';

export const getError = (state: State) => state.error;

export const getLoadState = (state: State) => state.loadState;

export const selectProgrammsState: MemoizedSelector<object, State> = createFeatureSelector('programs');

export const selectAllPrograms = programsAdapter.getSelectors(selectProgrammsState).selectAll;

export const selectProgramsError: MemoizedSelector<IProgram, any> = createSelector(selectProgrammsState, getError);

export const selectProgramsLoadState: MemoizedSelector<IProgram, any> = createSelector(selectProgrammsState, getLoadState);
