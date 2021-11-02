import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { EffectsModule }         from '@ngrx/effects';
import { StoreModule }           from '@ngrx/store';
import { ServicesModule }        from '../../services';
import { EmployeesStoreEffects } from './effects';
import { employeesReducer }      from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule,
    StoreModule.forFeature('employees', employeesReducer),
    EffectsModule.forFeature([EmployeesStoreEffects]),
  ],
  providers: [EmployeesStoreEffects]
})
export class EmployeeStoreModule {
}
