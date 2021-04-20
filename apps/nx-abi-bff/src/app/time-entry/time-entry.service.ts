import * as moment         from 'moment';
import { Model, ObjectId } from 'mongoose';
import { Injectable }      from '@nestjs/common';
import { InjectModel }     from '@nestjs/mongoose';
import { BaseService }     from '../base/base.service';
import { TimeEntry }       from './time-entry.model';

@Injectable()
export class TimeEntryService extends BaseService<TimeEntry> {

  constructor(@InjectModel(TimeEntry.name) protected timeEntryModel: Model<TimeEntry>) {
    super(timeEntryModel);
  }

  /**
   * Since time entry creation is always an upsert we override the base service fn.
   * Rule: one timeEntry per user per day
   * @param record
   */
  create(record: TimeEntry): any {
    const employeeId = record.employee.id;
    this.data.findOneAndUpdate(
      {
        day: {
          $eq: moment(record.day).toDate()
        },
        employee: {
          $eq: employeeId as any
        }
      },
      record,
      {upsert: true}
    ).exec();
  }

  async getWeekForEmployee(employeeId: ObjectId, startDate: string): Promise<any> {
    return this.getTimeEntriesByDayRange(this.getWeekFromStart(startDate), employeeId, startDate);
  }

  async getMonthForEmployee(employeeId: ObjectId, startDate: string) {
    return this.getTimeEntriesByDayRange(this.getDaysForMonth(startDate), employeeId, startDate);
  }

  private async getTimeEntriesByDayRange(days, employeeId, startDate) {
    const entries = await this.data.find(
      {
        day: {
          $gte: days[0].toDate(), $lte: days[days.length - 1].toDate()
        },
        employee: {
          $eq: employeeId
        }
      }
      , null
    ).exec();

    return {
      employeeId,
      startDate,
      days: days.map(d => d.format('YYYY-MM-DD')),
      entries: entries.reduce((state, entry) => {
        return {
          ...state,
          [moment(entry.day).format('YYYY-MM-DD')]: entry
        }
      }, {}),
    }
  }

  private getWeekFromStart(start: string): moment.Moment[] {
    const result = [moment(start)];

    for (let i = 1; i < 7; i++) {
      result.push(moment(start).add(i, 'days'));
    }

    return result;
  }

  private getDaysForMonth(day: string): moment.Moment[] {
    return Array.from({length: moment(day).daysInMonth()}, (x, i) => moment(day).startOf('month').add(i, 'days'));
  }
}
