import { Controller }       from '@nestjs/common';
import { EmployeeDoc }      from '@nx-abi-mgmt/nx-abi-shared';
import { EmployeesService } from './employees.service';
import { BaseController }   from '../base/base.controller';

@Controller({
  path: 'employees'
})
export class EmployeesController extends BaseController<EmployeeDoc>{

  constructor(protected empSvc: EmployeesService) {
    super(empSvc);
  }
}
