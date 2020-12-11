import { Model }                 from 'mongoose';
import { Injectable }            from '@nestjs/common';
import { InjectModel }           from '@nestjs/mongoose';
import { BaseService }           from '../base/base.service';
import { Employee, EmployeeDoc } from './employees.model';

@Injectable()
export class EmployeesService extends BaseService<EmployeeDoc> {

  constructor(@InjectModel(Employee.name) protected employeeModel: Model<EmployeeDoc>) {
    super(employeeModel);
  }
}
