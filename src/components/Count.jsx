import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/action";

function count(props) {
  return (
    <div>
      <h1>Wow this is a cool counter!</h1>
      <div className="count">
        <button className="btn btn-dark btn-lg m-2" onClick={props.decrement}>
          -
        </button>
        <span className="badge badge-dark m-2">count:{props.count}</span>
        <button className="btn btn-dark btn-lg m-2" onClick={props.increment}>
          +
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(count);
