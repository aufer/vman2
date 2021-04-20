import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';
import { ReactiveFormsModule }      from '@angular/forms';
import { EmployeesComponent }       from './employees.component';
import { EmployeesRoutingModule }   from './employees.routing';
import { EmployeeDetailsComponent } from './employee-details.component';
import { EmployeeFormComponent }    from './employee-form.component';
import { SharedComponentsModule }   from '../../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeesRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [EmployeesComponent, EmployeeDetailsComponent, EmployeeFormComponent]
})
export class EmployeesModule {
}
