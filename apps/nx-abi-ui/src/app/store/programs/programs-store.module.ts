import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { ServicesModule }       from '../../services';
import { StoreModule }          from '@ngrx/store';
import { EffectsModule }        from '@ngrx/effects';
import { ProgramsStoreEffects } from './effects';
import { programsReducer }      from './reducer';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    StoreModule.forFeature('programs', programsReducer),
    EffectsModule.forFeature([ProgramsStoreEffects]),
  ],
  providers: [ProgramsStoreEffects]
})
export class ProgramsStoreModule {
}
