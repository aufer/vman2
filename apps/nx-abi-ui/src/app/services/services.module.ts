import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { API_CONFIG }       from './api-config';
import { EmployeeService } from './employee.service';
import { TimeService }      from './time.service';

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
    EmployeeService
  ]
})
export class ServicesModule {}
