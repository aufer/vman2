import { selectAllMembers, selectMemberById, selectMembersError, selectMembersLoadingState } from './members/selectors';
import {
  selectAllEmployees,
  selectEmployeeById,
  selectEmployeesError,
  selectEmployeesLoadState
}                                                                          from './employees/selectors';
import { selectAllPrograms, selectProgramsError, selectProgramsLoadState } from './programs/selectors';

type Selector = (state: any) => any;

export type DefaultSelectors = {
  all: Selector,
  byId?: (id: string) => Selector,
  error: Selector,
  loadState: Selector,
};

export const selectorMap: {[entity: string]: DefaultSelectors} = {
  members: {
    all: selectAllMembers,
    byId: selectMemberById,
    error: selectMembersError,
    loadState: selectMembersLoadingState,
  },
  employees: {
    all: selectAllEmployees,
    byId: selectEmployeeById,
    error: selectEmployeesError,
    loadState: selectEmployeesLoadState,
  },
  programs: {
    all: selectAllPrograms,
    error: selectProgramsError,
    loadState: selectProgramsLoadState,
  }
};
