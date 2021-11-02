import * as moment                 from 'moment';
import { Action }                  from '@ngrx/store';
import { IEmployee, IWeeklySheet } from '@nx-abi-mgmt/nx-abi-shared';

export enum ActionTypes {
  LoadRequest = '[TIMESHEET] Load Request',
  LoadSuccess = '[TIMESHEET] Load Success',
  LoadFailure = '[TIMESHEET] Load Failure',
  UpdateRequest = '[TIMESHEET] Update Request',
  UpdateSuccess = '[TIMESHEET] Update Success',
  UpdateFailure = '[TIMESHEET] Update Failure'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LoadRequest;

  constructor(public readonly payload: { employee: IEmployee, day: moment.Moment }) {
  }
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public readonly payload: { timesheet: IWeeklySheet }) {
  }
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LoadFailure;

  constructor(public readonly payload: { error: string }) {
  }
}

export class UpdateRequestAction implements Action {
  readonly type = ActionTypes.UpdateRequest;

  constructor(public readonly payload: { employee: IEmployee, day: any, hours?: number, details?: string }) {
  }
}

export class UpdateSuccessAction implements Action {
  readonly type = ActionTypes.UpdateSuccess;

  constructor(public readonly payload: { timesheet: IWeeklySheet }) {
  }
}

export class UpdateFailureAction implements Action {
  readonly type = ActionTypes.UpdateFailure;

  constructor(public readonly payload: { error: string }) {
  }
}

export type LoadActions = LoadRequestAction | LoadSuccessAction | LoadFailureAction;
export type UpdateActions = UpdateRequestAction | UpdateSuccessAction | UpdateFailureAction;

export type Actions = LoadActions | UpdateActions;


