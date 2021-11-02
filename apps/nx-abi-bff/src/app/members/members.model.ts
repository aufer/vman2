import { Document }                    from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { idTransformer }               from '../util/schema-utils';

@Schema(idTransformer)
export class Member extends Document {
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
  premium?: number;

  @Prop()
  iban?: string;
  @Prop()
  bic?: string;
  @Prop()
  sepaRef?: string;

  @Prop()
  state?: string;

  @Prop()
  joined?: Date;

  @Prop()
  terminated?: Date;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
