import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { EffectsModule }       from '@ngrx/effects';
import { StoreModule }         from '@ngrx/store';
import { ServicesModule }      from '../../services';
import { MembersStoreEffects } from './effects';
import { membersReducer }      from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule,
    StoreModule.forFeature('members', membersReducer),
    EffectsModule.forFeature([MembersStoreEffects]),
  ],
  providers: [MembersStoreEffects]
})
export class MembersStoreModule {}
