import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { TimeComponent }       from './time.component';
import { TimeRoutingModule }   from './time.routing';
import { AbiFormsModule }      from '../../components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TimeComponent],
  imports: [
    CommonModule,
    TimeRoutingModule,
    HttpClientModule,
    AbiFormsModule,
    ReactiveFormsModule,
  ]
})
export class TimeModule {}
