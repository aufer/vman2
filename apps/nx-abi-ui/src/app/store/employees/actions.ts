import { Action }    from '@ngrx/store';
import { IEmployee } from '@nx-abi-mgmt/nx-abi-shared';

export enum ActionTypes {
  LoadAllRequest = '[EMPLOYEES] Load All Request',
  LoadAllSuccess = '[EMPLOYEES] Load All Success',
  LoadAllFailure = '[EMPLOYEES] Load All Failure',
}

export class LoadAllRequestAction implements Action {
  readonly type = ActionTypes.LoadAllRequest;
}

export class LoadAllSuccessAction implements Action {
  readonly type = ActionTypes.LoadAllSuccess;

  constructor(public readonly payload: { employees: IEmployee[] }) {
  }
}

export class LoadAllFailureAction implements Action {
  readonly type = ActionTypes.LoadAllFailure;

  constructor(public readonly payload: { error: string }) {
  }
}

export type Actions = LoadAllRequestAction | LoadAllSuccessAction | LoadAllFailureAction;
