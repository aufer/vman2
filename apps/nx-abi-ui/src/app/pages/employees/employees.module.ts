import { CommonModule }           from '@angular/common';
import { NgModule }               from '@angular/core';
import { EmployeesComponent }     from './employees.component';
import { EmployeesRoutingModule } from './employees.routing';
import { TableModule }            from '../../components/table/table.module';
import { PageModule }             from '../../components/page/page.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    TableModule,
    PageModule,
  ],
  declarations: [EmployeesComponent]
})
export class EmployeesModule {
}
