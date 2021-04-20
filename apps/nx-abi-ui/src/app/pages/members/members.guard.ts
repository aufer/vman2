import { CanActivate } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Store }                      from '@ngrx/store';
import { MembersActions, StoreModel } from '../../store';

@Injectable()
export class MembersGuard implements CanActivate {
  constructor(private store: Store<StoreModel>) {
  }

  canActivate(_, __): boolean {
    this.store.dispatch(new MembersActions.LoadAllRequestAction());
    return true;
  }
}
