import { Injectable }                                                                    from '@angular/core';
import { Actions, Effect, ofType }                                                       from '@ngrx/effects';
import { switchMap }                                                                     from 'rxjs/operators';
import { IProgram }                                                                      from '@nx-abi-mgmt/nx-abi-shared';
import { ProgramsService }                                                               from '../../services/programs.service';
import { ActionTypes, LoadAllFailureAction, LoadAllRequestAction, LoadAllSuccessAction } from './actions';

@Injectable()
export class ProgramsStoreEffects {
  constructor(private programsService: ProgramsService, private actions$: Actions) {
  }

  @Effect()
  loadRequestEffect$ = this.actions$.pipe(
    ofType<LoadAllRequestAction>(ActionTypes.LoadAllRequest),
    switchMap(_ => this.programsService.getAll()
      .then((res: { data: IProgram[] }) => new LoadAllSuccessAction({programs: res.data}))
      .catch(error => new LoadAllFailureAction({error})))
  );
}
