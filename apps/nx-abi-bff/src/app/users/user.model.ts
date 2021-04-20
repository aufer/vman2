import { Document }                    from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { idTransformer }               from '../util/schema-utils';

@Schema(idTransformer)
export class User extends Document{
  @Prop()
  givenName: string;

  @Prop()
  familyName: string;

  @Prop()
  picture?: string;

  @Prop()
  email: string;

  @Prop({unique: true})
  thirdPartyId: string;

  @Prop()
  provider: string;

  @Prop({})
  role: string;

  @Prop()
  lastLogin?: Date;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
