import { Document } from 'mongoose';


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
  startDate?: Date;
  state?: EmploymentState;
  title?: string;
  mgmt?: boolean;
  workingHours?: number;
  holidays?: number;
  salary?: number;
  lsk?: number;
  confession?: Confession;
  svNumber?: string;
  rvNumber?: string;
  eTin?: string;
}
