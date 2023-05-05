import { connect } from "react-redux";

const Counter = (props: any) => {
  return (
    <div className="w-5/6 mx-auto border border-cyan-300 text-center font-bold text-3xl text-red-300">
      <h1>{props.count}</h1>
      <button className="mr-10 bg-black" onClick={props.increment}>
        Increment
      </button>
      <button className="ml-10 bg-black" onClick={props.decrement}>
        Decrement
      </button>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
