import { Document } from 'mongoose';

export enum MemberState {
  Active = 'active',
  Terminated = 'terminated',
}

export interface IMember extends Document {
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  street?: string;
  streetNo?: string;
  addition?: string;
  location?: string;
  postCode?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  premium?: number;
  iban?: string;
  bic?: string;
  sepaRef?: string;
  state?: MemberState;
  joined?: Date;
  terminated?: Date;
}
