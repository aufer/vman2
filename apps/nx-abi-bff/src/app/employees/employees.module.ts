import { Module }                   from '@nestjs/common';
import { MongooseModule }           from '@nestjs/mongoose';
import { EmployeesController }      from './employees.controller';
import { Employee, EmployeeSchema } from './employees.model';
import { EmployeesService }         from './employees.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Employee.name, schema: EmployeeSchema}]),
  ],
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
  ]
})
export class EmployeesModule {
}
