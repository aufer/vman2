import { RouterModule, Routes } from '@angular/router';
import { NgModule }             from '@angular/core';
import { ProgramsComponent }    from './programs.component';

const routes: Routes = [{path: '', component: ProgramsComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ProgramsRoutingModule {}
