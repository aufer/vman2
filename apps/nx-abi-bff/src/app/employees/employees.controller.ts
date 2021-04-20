import { Controller }       from '@nestjs/common';
import { Employee }         from './employees.model';
import { EmployeesService } from './employees.service';
import { BaseController }   from '../base/base.controller';

@Controller({
  path: 'api/employees'
})
export class EmployeesController extends BaseController<Employee> {

  constructor(protected empSvc: EmployeesService) {
    super(empSvc);
  }
}
