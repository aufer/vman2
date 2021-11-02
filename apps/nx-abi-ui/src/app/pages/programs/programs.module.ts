import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { ProgramsRoutingModule }  from './programs.routing';
import { ProgramsComponent }      from './programs.component';
import { ProgramFormComponent }   from './program-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProgramsRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ProgramsComponent, ProgramFormComponent]
})
export class ProgramsModule {
}
