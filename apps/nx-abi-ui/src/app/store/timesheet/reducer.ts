import { Actions, ActionTypes } from './actions';
import { initialState }         from './state';

export function timesheetReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.LoadRequest:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ActionTypes.LoadSuccess:
      return {
        ...state,
        entity: action.payload.timesheet,
        isLoading: false,
        error: null,
      };

    case ActionTypes.LoadFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
