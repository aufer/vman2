import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document }                    from 'mongoose';
import { idTransformer } from '../util/schema-utils';

@Schema(idTransformer)
export class Registration extends Document {
  @Prop()
  name: string;

  @Prop()
  startDate: Date;
  @Prop()
  endDate: Date;



}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);
