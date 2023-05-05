import { legacy_createStore as createStore, Action } from "redux";

const initialState = {
  text : "xin chào nhá ^^",
  count : 0
};
const YES = 'YES';
const NO = 'NO';



function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case YES:
      return {
        ...state,
        text : state.text + " gâu gâu ",
        count : state.count + 10
        
      };
    case NO:
      return {
        ...state,
        text : state.text + " meo meo ",
        count : state.count - 10
        
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);

