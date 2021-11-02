import { EmployeesStoreState } from './employees';
import { MembersStoreState }   from './members';
import { TimesheetStoreState } from './timesheet';
import { ProgramsStoreState }  from './programs';

export interface State {
  members: MembersStoreState.State,
  employees: EmployeesStoreState.State,
  timesheet: TimesheetStoreState.State,
  programs: ProgramsStoreState.State,
}
