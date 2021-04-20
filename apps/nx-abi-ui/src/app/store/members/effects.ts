import { switchMap }                                                                     from 'rxjs/operators';
import { Injectable }                                                                    from '@angular/core';
import { Actions, Effect, ofType }                                                       from '@ngrx/effects';
import { IMember }                                                                       from '@nx-abi-mgmt/nx-abi-shared';
import { ActionTypes, LoadAllFailureAction, LoadAllRequestAction, LoadAllSuccessAction } from './actions';
import { MembersService }                                                                from '../../services/members.service';

@Injectable()
export class MembersStoreEffects {
  constructor(private membersService: MembersService, private actions$: Actions) {
  }

  @Effect()
  loadRequestEffect$ = this.actions$.pipe(
    ofType<LoadAllRequestAction>(ActionTypes.LoadAllRequest),
    switchMap(_ => this.membersService.getAll()
      .then((res: { data: IMember[] }) => new LoadAllSuccessAction({members: res.data}))
      .catch(error => new LoadAllFailureAction({error})))
  );
}
