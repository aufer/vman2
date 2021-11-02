import { Action }   from '@ngrx/store';
import { IProgram } from '@nx-abi-mgmt/nx-abi-shared';

export enum ActionTypes {
  LoadAllRequest = '[PROGRAMS] Load All Request',
  LoadAllSuccess = '[PROGRAMS] Load All Success',
  LoadAllFailure = '[PROGRAMS] Load All Failure',
}

export class LoadAllRequestAction implements Action {
  readonly type = ActionTypes.LoadAllRequest;
}

export class LoadAllSuccessAction implements Action {
  readonly type = ActionTypes.LoadAllSuccess;

  constructor(public readonly payload: { programs: IProgram[] }) {
  }
}

export class LoadAllFailureAction implements Action {
  readonly type = ActionTypes.LoadAllFailure;

  constructor(public readonly payload: { error: string }) {
  }
}

export type Actions = LoadAllRequestAction | LoadAllSuccessAction | LoadAllFailureAction;
