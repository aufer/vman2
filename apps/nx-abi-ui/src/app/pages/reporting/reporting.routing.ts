import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { MembersReportComponent } from './members/members-report.component';
import { ReportingComponent }     from './reporting.component';
import { TimeReportComponent }    from './time/time-report.component';

const routes: Routes = [
  {
    path: '', component: ReportingComponent,
    children: [
      {path: 'time', component: TimeReportComponent},
      {path: 'members', component: MembersReportComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TimeRoutingModule {}
