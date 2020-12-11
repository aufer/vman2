import { Document }                    from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Confession, EmploymentState } from '@nx-abi-mgmt/nx-abi-shared';

export type EmployeeDoc = Employee & Document;

@Schema()
export class Employee {

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
  location?: string;
  @Prop()
  postCode?: string;

  @Prop()
  phone?: string;
  @Prop()
  mobile?: string;
  @Prop()
  email?: string;

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
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
