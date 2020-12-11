import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { MemberDetailsComponent } from './member-details.component';
import { MembersRoutingModule }   from './members.routing';
import { MembersComponent }       from './members.component';
import { TableModule }            from '../../components/table/table.module';
import { PageModule }             from '../../components/page/page.module';
import { DataViewModule }         from '../../components/data-view/data-view.module';

@NgModule({
  declarations: [MembersComponent, MemberDetailsComponent],
  imports: [
    CommonModule,
    TableModule,
    MembersRoutingModule,
    PageModule,
    DataViewModule,
  ]
})
export class MembersModule {}
