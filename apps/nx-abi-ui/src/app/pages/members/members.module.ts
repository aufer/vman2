import { NgModule }                                                from '@angular/core';
import { CommonModule }                                            from '@angular/common';
import { ReactiveFormsModule }                                     from '@angular/forms';
import { MemberDetailsComponent }                                  from './member-details.component';
import { MemberFormComponent }                                     from './member-form.component';
import { MembersComponent }                                        from './members.component';
import { MembersRoutingModule }                                    from './members.routing';
import { AbiFormsModule, DataViewModule, PageModule, TableModule } from '../../components';

@NgModule({
  declarations: [MembersComponent, MemberDetailsComponent, MemberFormComponent],
  imports: [
    CommonModule,
    TableModule,
    AbiFormsModule,
    MembersRoutingModule,
    PageModule,
    DataViewModule,
    ReactiveFormsModule,
  ]
})
export class MembersModule {
}
