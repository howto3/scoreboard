import React from "react";

export const Counter = (props) => (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => props.grantScore('minus', props.id, 5) }>-</button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment" onClick={() => props.grantScore('plus', props.id, 5) }>+</button>
    </div>
);