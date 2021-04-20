import { switchMap }                                                            from 'rxjs/operators';
import { Injectable }                                                           from '@angular/core';
import { Actions, Effect, ofType }                                              from '@ngrx/effects';
import { IWeeklySheet }                                                         from '../../../../../../libs/nx-abi-shared/src/lib/model/weekly-sheet';
import { TimeService }                                                                               from '../../services';
import {
  ActionTypes,
  LoadFailureAction,
  LoadRequestAction,
  LoadSuccessAction,
  UpdateFailureAction,
  UpdateRequestAction
} from './actions';

@Injectable()
export class TimesheetStoreEffects {
  constructor(private timeService: TimeService, private actions$: Actions) {
  }

  @Effect()
  loadRequestEffect$ = this.actions$.pipe(
    ofType<LoadRequestAction>(ActionTypes.LoadRequest),
    switchMap((a: LoadRequestAction) => this.timeService.getWeeklySheet(a.payload.employee, a.payload.day)
      .then((res: { data: IWeeklySheet }) => new LoadSuccessAction({timesheet: res.data}))
      .catch(error => new LoadFailureAction({error}))
    )
  );

  @Effect()
  updateEntryEffect$ = this.actions$.pipe(
    ofType<UpdateRequestAction>(ActionTypes.UpdateRequest),
    switchMap((a: UpdateRequestAction) => this.timeService.addTimeEntry(a.payload.employee, a.payload.day, a.payload.hours, a.payload.details)
      .then((_: any) => new LoadRequestAction({employee: a.payload.employee, day: a.payload.day}))
      .catch(error => new UpdateFailureAction({error})),
    )
  );
}
