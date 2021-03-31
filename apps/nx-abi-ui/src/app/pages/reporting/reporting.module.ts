import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AbiFormsModule }      from '../../components';
import { ServicesModule }      from '../../services';
import { ReportingComponent }  from './reporting.component';
import { TimeRoutingModule }   from './reporting.routing';

@NgModule({
  declarations: [ReportingComponent],
  imports: [
    CommonModule,
    TimeRoutingModule,
    HttpClientModule,
    AbiFormsModule,
    ReactiveFormsModule,
    ServicesModule,
  ]
})
export class ReportingModule {
}
