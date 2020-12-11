import { Model }                   from "mongoose";
import { Injectable }              from '@nestjs/common';
import { InjectModel }             from '@nestjs/mongoose';
import { BaseService }             from '../base/base.service';
import { TimeEntry, TimeEntryDoc } from './time-entry.model';

@Injectable()
export class TimeEntryService extends BaseService<TimeEntryDoc> {

  constructor(@InjectModel(TimeEntry.name) protected timeEntryModel: Model<TimeEntryDoc>) {
    super(timeEntryModel);
  }

  getMonthForEmployee(employeeId: string, dateOfMonth: number): TimeEntry[] {
    return [];
  }
}
