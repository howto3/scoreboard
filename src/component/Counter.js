import PropTypes from 'prop-types';
import React from "react";
import {connect} from "react-redux";
import {changeScore} from "../redux/action";

const Counter = (props) => {
  const {changeScore, id, score} = props;

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore('minus', id, 5)}>-</button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" onClick={() => changeScore('plus', id, 5)}>+</button>
    </div>
  )
};

Counter.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  changeScore: (act, id, delta) => dispatch(changeScore(act, id, delta))
});

export default connect(null, mapDispatchToProps)(Counter);