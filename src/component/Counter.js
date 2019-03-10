import PropTypes from 'prop-types';
import React from "react";

export const Counter = (props) => {
  const {grantScore, id, score} = props;

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => grantScore('minus', id, 5)}>-</button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" onClick={() => grantScore('plus', id, 5)}>+</button>
    </div>
  )
};

Counter.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  grantScore: PropTypes.func
};