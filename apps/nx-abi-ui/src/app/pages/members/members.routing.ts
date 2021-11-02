import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { MembersComponent }       from './members.component';
import { MemberDetailsComponent } from './member-details.component';
import { MemberFormComponent }    from './member-form.component';
import { MembersGuard }           from './members.guard';

const routes: Routes = [
  {path: '', component: MembersComponent, canActivate: [MembersGuard]},
  {path: ':id', component: MemberDetailsComponent, canActivate: [MembersGuard]},
  {path: 'edit', component: MemberFormComponent, canActivate: [MembersGuard]},
  {path: 'edit/:id', component: MemberFormComponent, canActivate: [MembersGuard]},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [MembersGuard],
  exports: [RouterModule]
})
export class MembersRoutingModule {}
