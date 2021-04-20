import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { ServicesModule }        from '../../services';
import { StoreModule }           from '@ngrx/store';
import { timesheetReducer }      from './reducer';
import { EffectsModule }         from '@ngrx/effects';
import { TimesheetStoreEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    StoreModule.forFeature('timesheet', timesheetReducer),
    EffectsModule.forFeature([TimesheetStoreEffects]),
  ],
  providers: [TimesheetStoreEffects]
})
export class TimesheetStoreModule {}
