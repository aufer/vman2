import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { HttpClientModule }       from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { AbiFormsModule }         from '../../components';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { ServicesModule }         from '../../services';
import { ReportingComponent }     from './reporting.component';
import { TimeRoutingModule }      from './reporting.routing';
import { TimeReportComponent }    from './time/time-report.component';
import { MembersReportComponent } from './members/members-report.component';

const REPORTS = [MembersReportComponent, TimeReportComponent];

@NgModule({
  declarations: [ReportingComponent, ...REPORTS],
  imports: [
    CommonModule,
    TimeRoutingModule,
    HttpClientModule,
    AbiFormsModule,
    ReactiveFormsModule,
    ServicesModule,
    SharedComponentsModule,
  ]
})
export class ReportingModule {
}
