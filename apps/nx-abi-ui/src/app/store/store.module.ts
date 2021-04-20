import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { EffectsModule }        from '@ngrx/effects';
import { StoreModule }          from '@ngrx/store';
import { EmployeeStoreModule }  from './employees';
import { MembersStoreModule }   from './members';
import { debug }                from './store-logger';
import { TimesheetStoreModule } from './timesheet';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MembersStoreModule,
    EmployeeStoreModule,
    TimesheetStoreModule,
    StoreModule.forRoot({}, {metaReducers: [debug]}),
    EffectsModule.forRoot([]),
  ]
})
export class AppStoreModule {
}
