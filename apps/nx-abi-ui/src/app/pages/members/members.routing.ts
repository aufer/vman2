import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { MembersComponent }       from './members.component';
import { MemberDetailsComponent } from './member-details.component';
import { MemberFormComponent }    from './member-form.component';

const routes: Routes = [
  {path: '', component: MembersComponent},
  {path: ':id', component: MemberDetailsComponent},
  {path: 'edit', component: MemberFormComponent},
  {path: 'edit/:id', component: MemberFormComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MembersRoutingModule {}
