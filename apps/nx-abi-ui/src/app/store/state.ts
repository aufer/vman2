import { EmployeesStoreState } from './employees';
import { MembersStoreState }   from './members';
import { TimesheetStoreState } from './timesheet';

export interface State {
  members: MembersStoreState.State,
  employees: EmployeesStoreState.State,
  timesheet: TimesheetStoreState.State,
}
