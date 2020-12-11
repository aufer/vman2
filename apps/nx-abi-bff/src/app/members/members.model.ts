import { Document }                    from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MemberState }                 from '@nx-abi-mgmt/nx-abi-shared';

export type MemberDoc = Member & Document

@Schema()
export class Member {
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
