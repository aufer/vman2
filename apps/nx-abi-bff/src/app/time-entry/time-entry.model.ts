import * as mongoose                   from "mongoose";
import { Document }                    from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Employee }                    from '../employees/employees.model';

export type TimeEntryDoc = TimeEntry & Document;

@Schema()
export class TimeEntry {
  @Prop()
  day: Date;

  @Prop()
  hours: number;

  @Prop()
  break: number;

  @Prop()
  details?: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: Employee})
  employee: Employee
}

export const TimeEntrySchema = SchemaFactory.createForClass(TimeEntry);
