import { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/countslice";

export default function TestThis() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="w-full mx-auto text-center">
      <h1>The count is {count}</h1>
      <div className="button">
        <button onClick={() => dispatch(increment())}>meo meo</button>
        <button onClick={() => dispatch(decrement())}>gâu gâu</button>
        <button onClick={() => dispatch(incrementByAmount(20))}>
          Increase by 10
        </button>
      </div>
    </div>
  );
}
