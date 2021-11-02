import * as mongoose                   from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User }                        from '../users/user.model';
import { idTransformer }               from '../util/schema-utils';

@Schema(idTransformer)
export class Employee extends mongoose.Document {
  @Prop()
  firstName?: string;
  @Prop()
  lastName?: string;

  @Prop()
  birthDate?: Date;

  @Prop()
  street?: string;
  @Prop()
  streetNo?: string;
  @Prop()
  addition?: string;
  @Prop()
  city?: string;

  @Prop()
  postCode?: string;

  @Prop()
  phone?: string;
  @Prop()
  mobile?: string;
  @Prop()
  email?: string;
  @Prop()
  workEmail?: string;

  @Prop()
  startDate?: Date;

  @Prop()
  state?: string;

  @Prop()
  title?: string;

  @Prop()
  mgmt?: boolean;

  @Prop()
  workingHours?: number;

  @Prop()
  holidays?: number;

  @Prop()
  salary?: number;

  @Prop()
  lsk?: number;

  @Prop()
  confession?: string;

  @Prop()
  svNumber?: string;

  @Prop()
  rvNumber?: string;

  @Prop()
  eTin?: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: User})
  user?: User;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
