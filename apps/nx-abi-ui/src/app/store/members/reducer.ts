import { initialState, membersAdapter, State } from './state';
import { Actions, ActionTypes }                from './actions';

export function membersReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LoadAllRequest:
      return {
        ...state,
        loadState: 'pending',
        error: null,
      };

    case ActionTypes.LoadAllSuccess:
      return membersAdapter.addMany(action.payload.members, {
        ...state,
        loadState: action.payload.members.length > 0 ? 'loaded' : 'empty',
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
