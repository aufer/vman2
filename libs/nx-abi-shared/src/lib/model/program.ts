import { Document } from 'mongoose';

export interface IProgram extends Document {
  name: string;
  startDate: Date;
  endDate: Date;
}
