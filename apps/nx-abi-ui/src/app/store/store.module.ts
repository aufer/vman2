import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { EffectsModule }        from '@ngrx/effects';
import { StoreModule }          from '@ngrx/store';
import { EmployeeStoreModule }  from './employees';
import { MembersStoreModule }   from './members';
import { debug }                from './store-logger';
import { TimesheetStoreModule } from './timesheet';
import { ProgramsStoreModule }  from './programs';

@NgModule({
  imports: [
    CommonModule,
    MembersStoreModule,
    EmployeeStoreModule,
    TimesheetStoreModule,
    ProgramsStoreModule,
    StoreModule.forRoot({}, {metaReducers: [debug]}),
    EffectsModule.forRoot([]),
  ]
})
export class AppStoreModule {
}
