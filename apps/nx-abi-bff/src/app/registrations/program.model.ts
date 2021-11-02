import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document }                    from 'mongoose';
import { idTransformer } from '../util/schema-utils';
import * as mongoose     from 'mongoose';
import { Registration }  from './registration.model';

@Schema(idTransformer)
export class Program extends Document {
  @Prop()
  name: string;

  @Prop()
  startDate: Date;
  @Prop()
  endDate: Date;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: Registration})
  registrations: Registration[];

}

export const ProgramSchema = SchemaFactory.createForClass(Program);
