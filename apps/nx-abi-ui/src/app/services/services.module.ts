import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { API_CONFIG }       from './api-config';
import { EmployeeService }  from './employee.service';
import { TimeService }      from './time.service';
import { UserService }      from './user.service';
import { MembersService }   from './members.service';
import { ProgramsService }  from './programs.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    {
      provide: API_CONFIG,
      useValue: {
        base: '//localhost:3333/api'
      },
    },
    TimeService,
    EmployeeService,
    UserService,
    MembersService,
    ProgramsService,
  ]
})
export class ServicesModule {}
