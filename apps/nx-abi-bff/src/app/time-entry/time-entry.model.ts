import * as mongoose                   from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Employee }                    from '../employees/employees.model';
import { idTransformer }               from '../util/schema-utils';

@Schema(idTransformer)
export class TimeEntry extends mongoose.Document {
  @Prop()
  day: Date;

  @Prop()
  hours: number;

  @Prop()
  break: number;

  @Prop()
  details?: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: Employee})
  employee: Employee;
}

export const TimeEntrySchema = SchemaFactory.createForClass(TimeEntry);
