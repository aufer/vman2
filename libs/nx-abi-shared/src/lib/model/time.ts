import { Document }  from 'mongoose';
import { IEmployee } from './employee';

export interface ITimeEntry extends Document {
  day: Date;
  hours: number
  break: number;
  details?: string;
  employee: IEmployee;
}
