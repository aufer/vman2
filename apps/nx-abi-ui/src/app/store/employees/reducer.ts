import { initialState, employeesAdapter, State } from './state';
import { Actions, ActionTypes }                from './actions';

export function employeesReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LoadAllRequest:
      return {
        ...state,
        loadState: 'pending',
        error: null,
      };

    case ActionTypes.LoadAllSuccess:
      return employeesAdapter.addMany(action.payload.employees, {
        ...state,
        loadState: action.payload.employees.length > 0 ? 'loaded' : 'empty',
        error: null,
      });

    case ActionTypes.LoadAllFailure:
      return {
        ...state,
        loadState: 'error',
        error: action.payload.error,
      };

    default:
      return state;
  }
}
