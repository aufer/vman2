import { Controller, Get, Param } from '@nestjs/common';
import { BaseController }         from '../base/base.controller';
import { TimeEntry }              from './time-entry.model';
import { TimeEntryService }       from './time-entry.service';

@Controller({
  path: 'api/time'
})
export class TimeEntryController extends BaseController<TimeEntry> {

  constructor(protected service: TimeEntryService) {
    super(service);
  }

  @Get('month/:employeeId/:dateOfMonth')
  async getMonthForEmployee(@Param() params) {
    const employee = params.employeeId;
    const dateOfMonth = params.dateOfMonth;

    if (!employee) return;

    return await this.service.getMonthForEmployee(employee, dateOfMonth);
  }

  @Get('week/:employeeId/:startDate')
  async getWeekForEmployee(@Param() params): Promise<any> {
    const employee = params.employeeId;
    const startDate = params.startDate;

    if (!employee) return;
    if (!startDate) return;

    return {
      time: Date.now(),
      data: await this.service.getWeekForEmployee(employee, startDate),
    };
  }
}
