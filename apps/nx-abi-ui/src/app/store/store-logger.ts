import { ActionReducer } from '@ngrx/store';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    const s = reducer(state, action);
    console.group('state change @', new Date().toLocaleTimeString(), 'by', action.type);
    console.log('%cstate:before', 'color: #999; font-weight: 800',state);
    console.log('%caction', 'color: #00c5bb; font-weight: 800', action);
    console.log('%cstate:after', 'color: #009d22; font-weight: 800',s);
    console.groupEnd();

    return s;
  };
}
