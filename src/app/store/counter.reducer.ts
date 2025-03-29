import { Action, createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.actions";
// import { CounterActions, DecrementAction, IncrementAction } from "./counter.actions";


const initialState = 0;

// not supported in older version of ngrx
export const counterReducer = createReducer(initialState,
    on(increment, (state, action)=> state + action.value),
    on(decrement, (state, action) => state - action.value)
);

// export function counterReducer(state = initialState, action: CounterActions | Action) {
//     if(action.type === '[Counter ] Increment'){
//         return state + (action as IncrementAction).value;
//     } else if(action.type === '[Counter ] Decrement'){
//         return state - (action as DecrementAction).value;
//     }
//     return state;
// }

