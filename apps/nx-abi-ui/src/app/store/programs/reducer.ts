import { initialState, programsAdapter, State } from './state';
import { Actions, ActionTypes }                 from './actions';

export function programsReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LoadAllRequest:
      return {
        ...state,
        loadState: 'pending',
        error: null,
      };

    case ActionTypes.LoadAllSuccess:
      return programsAdapter.addMany(action.payload.programs, {
        ...state,
        loadState: action.payload.programs.length > 0 ? 'loaded': 'empty',
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
