import { ITimeEntry } from './time';

export interface IWeeklySheet {
  employeeId: string;
  startDate: string
  days: string[],
  entries: {[day: string]: ITimeEntry}
}


