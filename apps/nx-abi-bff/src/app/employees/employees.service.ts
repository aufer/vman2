import { Model }       from 'mongoose';
import { Injectable }  from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from '../base/base.service';
import { Employee }    from './employees.model';
import { User }        from '../users/user.model';

@Injectable()
export class EmployeesService extends BaseService<Employee> {

  constructor(@InjectModel(Employee.name) protected employeeModel: Model<Employee>) {
    super(employeeModel);
  }

  // TODO: finally use the user instead of the workMail.
  upsertFromUser(employee: Employee, user: User) {
    return this.employeeModel.findOneAndUpdate({
      workEmail: employee.workEmail,
      user: {
        $eq: user.id as any,
      }
    }, employee, {upsert: true}).exec();
  }

  findByWorkEmail(workEmail: string) {
    return this.employeeModel.findOne({workEmail}).exec();
  }
}
