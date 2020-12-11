import * as mongoose                   from "mongoose";
import { Document }                    from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Employee }                    from '../employees/employees.model';

export type TimeEntryDoc = TimeEntry & Document;

@Schema()
export class TimeEntry {
  @Prop()
  start: Date;

  @Prop()
  end: Date;

  @Prop()
  break: number;

  @Prop()
  details?: string;

  @Prop({type: mongoose.Schema.Types.ObjectId})
  employee: Employee
}

export const TimeEntrySchema = SchemaFactory.createForClass(TimeEntry);
