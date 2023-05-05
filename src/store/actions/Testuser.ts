// store subcribed listener
// this is action
import { combineReducers,Middleware } from "redux";
import { legacy_createStore as createStore, Action } from "redux";

interface State {
  state: object;
  price: string;
}
const USER_ORDERED = "USER_ORDERED";
const userOrder = () => {
  return {
    type: USER_ORDERED,
    adduser: 1,
  };
};

const inittalState = {
  numberUser: 10,
  price: "một trăm nghìn việt nam đồng",
};

// reducer will rev previous state and action => new state
// this is reducer
function reducer(state = inittalState, action: Action) {
  switch (action.type) {
    case USER_ORDERED:
      return {
        ...state,
        numberUser: state.numberUser + 1,
      };
    default:
      return { ...state };
  }
}
function ORDERED(state = inittalState, action: Action) {
  switch (action.type) {
    case USER_ORDERED:
      return {
        ...state,
        numberUser: state.numberUser + 1,
      };
    default:
      return { ...state };
  }
}

// chúng ta có thể chia nhỏ ra làm nhiều reducer sau rồi combineReducer
const rootReducer = combineReducers({
  user: ORDERED,
  reduce: reducer,
});

// chúng ta sẽ sử dụng việc tạo một store bằng việc tạo một createStore

const store = createStore(rootReducer);
// store có thể đăng ký một hàm callback
store.subscribe(() => {
  console.log("xin chào tất cả các bạn nha!");
});

// chúng ta có thể dispatch một action
store.dispatch(userOrder());
