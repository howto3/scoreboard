import React from "react";
import {Counter} from "./Counter";
import PropTypes from 'prop-types';

export class Player extends React.Component {
  static propTypes = {
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    grantScore: PropTypes.func
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log('shouldComponentUpdate', nextProps);
    return nextProps.score !== this.props.score;
  }
  render() {
    console.log('Player.name:', this.props.name);

    const {removePlayer, name, score, id, grantScore} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
        </span>
        <span className="player-name">{ name }</span>
        <Counter score={ score } grantScore = { grantScore } id = { id } />
      </div>
    );
  }
}