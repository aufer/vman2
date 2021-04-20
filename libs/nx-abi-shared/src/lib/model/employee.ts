import { Document } from 'mongoose';
import { IUser }     from './user';


export enum Confession {
  Ev = 'ev',
  Rk = 'rk',
  None = 'none',
}

export enum EmploymentState {
  Planned = 'planned',
  Active = 'active',
  Terminated = 'terminated',
}

export interface IEmployee extends Document {
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
  workEmail?: string;
  startDate?: Date;
  state?: EmploymentState;
  title?: string;
  mgmt?: boolean;
  workingHours?: number;
  holidays?: number;
  salary?: number;
  lsk?: number;
  iban?: string;
  bic?: string;
  confession?: Confession;
  svNumber?: string;
  rvNumber?: string;
  eTin?: string;
  user?: IUser;
}
