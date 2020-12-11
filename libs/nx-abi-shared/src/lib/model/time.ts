import { Document }  from 'mongoose';
import { IEmployee } from './employee';

export interface TimeEntry extends Document {
  start: Date;
  end: Date;
  break: number;
  details?: string;
  employee: IEmployee;
}
