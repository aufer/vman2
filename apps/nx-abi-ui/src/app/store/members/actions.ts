import { Action }  from '@ngrx/store';
import { IMember } from '@nx-abi-mgmt/nx-abi-shared';

export enum ActionTypes {
  LoadAllRequest = '[MEMBERS] Load All Request',
  LoadAllSuccess = '[MEMBERS] Load All Success',
  LoadAllFailure = '[MEMBERS] Load All Failure',
}

export class LoadAllRequestAction implements Action {
  readonly type = ActionTypes.LoadAllRequest;
}

export class LoadAllSuccessAction implements Action {
  readonly type = ActionTypes.LoadAllSuccess;
  constructor(public readonly payload: {members: IMember[]}) {
  }
}

export class LoadAllFailureAction implements Action {
  readonly type = ActionTypes.LoadAllFailure;
  constructor(public readonly payload: {error: string}) {
  }
}

export type Actions = LoadAllRequestAction | LoadAllSuccessAction | LoadAllFailureAction;
