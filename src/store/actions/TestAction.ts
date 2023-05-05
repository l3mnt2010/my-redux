import { legacy_createStore as createStore, Action } from "redux";

const initialState = {
  count: 0,
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);
