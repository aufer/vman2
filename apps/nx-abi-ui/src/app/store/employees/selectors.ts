import { employeesAdapter, State }                                 from './state';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IEmployee }                                               from '@nx-abi-mgmt/nx-abi-shared';

export const getError = (state: State) => state.error;

export const getLoadState = (state: State) => state.loadState;

export const selectEmployeesState: MemoizedSelector<object, State> = createFeatureSelector('employees');

export const selectAllEmployees = employeesAdapter.getSelectors(selectEmployeesState).selectAll;

export const selectEmployeeById = (id: string) => createSelector(selectAllEmployees, (employees: IEmployee[]) => {
  if (!employees) return null;
  return employees.find(m => m.id === id);
});

export const selectEmployeesError: MemoizedSelector<IEmployee, any> = createSelector(selectEmployeesState, getError);

export const selectEmployeesLoadState: MemoizedSelector<IEmployee, any> = createSelector(selectEmployeesState, getLoadState);
