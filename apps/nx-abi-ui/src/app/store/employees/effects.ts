import { startWith, switchMap }                                                          from 'rxjs/operators';
import { Injectable }                                                                    from '@angular/core';
import { Actions, Effect, ofType }                                                       from '@ngrx/effects';
import { EmployeeService }                                                               from '../../services';
import { ActionTypes, LoadAllFailureAction, LoadAllRequestAction, LoadAllSuccessAction } from './actions';
import { IEmployee }                                                                     from '@nx-abi-mgmt/nx-abi-shared';

@Injectable()
export class EmployeesStoreEffects {
  constructor(private employeesService: EmployeeService, private actions$: Actions) {
  }

  @Effect()
  loadRequestEffect$ = this.actions$.pipe(
    ofType<LoadAllRequestAction>(ActionTypes.LoadAllRequest),
    switchMap(_ => this.employeesService.getAll()
      .then((res: { data: IEmployee[] }) => new LoadAllSuccessAction({employees: res.data}))
      .catch(error => new LoadAllFailureAction({error})))
  );
}
