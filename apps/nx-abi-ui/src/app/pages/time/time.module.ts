import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { TimeComponent }     from './time.component';
import { TimeRoutingModule } from './time.routing';

@NgModule({
  declarations: [TimeComponent],
  imports: [
    CommonModule,
    TimeRoutingModule,
  ]
})
export class TimeModule {}
