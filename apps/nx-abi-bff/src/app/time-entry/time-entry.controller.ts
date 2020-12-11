import { Controller, Get, Param }            from '@nestjs/common';
import { ApiResource, BaseController, from } from '../base/base.controller';
import { TimeEntryService }        from './time-entry.service';
import { TimeEntry, TimeEntryDoc } from './time-entry.model';

@Controller({
  path: 'time'
})
export class TimeEntryController extends BaseController<TimeEntryDoc> {

  constructor(protected service: TimeEntryService) {
    super(service);
  }

  @Get(':employeeId/:dateOfMonth')
  getMonthForEmployee(@Param() params): ApiResource<TimeEntry[]> {
    const employee = params.employeeId;
    const dateOfMonth = params.dateOfMonth;

    if (!employee) return;

    return from(this.service.getMonthForEmployee(employee, dateOfMonth));
  }
}
