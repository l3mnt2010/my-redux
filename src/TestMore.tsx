import { connect } from "react-redux";

const TestMore = (props: any) => {
  return (
    <div>
      <div>
        <h1>{props.text}</h1>
        <h2>{props.count}</h2>
        <button onClick={props.yes} className="bg-yellow-300">
          Yes
        </button>
        <button onClick={props.no} className="bg-purple-500">
          No
        </button>
      </div>
    </div>
  );
};
function mapStateToProps(state: any) {
  return {
    count: state.count,
    text: state.text,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    yes: () => dispatch({ type: "YES" }),
    no: () => dispatch({ type: "NO" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestMore);
