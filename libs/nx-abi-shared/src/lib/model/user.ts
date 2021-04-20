import { Document }  from 'mongoose';

export enum UserRole {
  ADMIN = 'admin',
  EMPLOYEE = 'employee',
  VORSTAND = 'vorstand',
}

export interface IUser extends Document {
  givenName: string;
  familyName: string;
  picture?: string;
  email: string;
  thirdPartyId: string;
  provider: string;
  role: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
}
