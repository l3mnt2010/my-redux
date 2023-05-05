import { legacy_createStore as createStore, Action } from "redux";

interface State {
  status: boolean;
  sort: {
    name: string;
    value: number;
  };
}
interface States {
  type: string;
  sort: {
    by: string;
    value: number;
  };
}

const initialState: State = {
  status: false,
  sort: {
    name: "lâm",
    value: 1,
  },
};

const initState: States = {
  type: "SORT",
  sort: {
    by: "lam",
    value: -1,
  },
};
const Redux = () => {
  const myReducer = (state: State = initialState, action: Action) => {
    if (action.type === "TOGGLE_STATUS") {
      return {
        ...state,
        status: !state.status,
      };
    } else {
      console.log(action);
      return state;
    }
  };

  const store = createStore(myReducer);

  const action = {
    type: "TOGGLE_STATUS",
  };

  store.dispatch(action);
  store.dispatch(initState);

  console.log("xin chào", store.getState());

  return <></>;
};
export default Redux;
