import React from "react";
import Counter from "./Counter";
import PropTypes from 'prop-types';
import {removePlayer} from "../redux/action";
import {connect} from "react-redux";

class Player extends React.Component {
  static propTypes = {
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    grantScore: PropTypes.func
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.score !== this.props.score;
  }
  render() {
    const {removePlayer, name, score, id} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
        </span>
        <span className="player-name">{ name }</span>
        <Counter score={ score } id = { id } />
      </div>
    );
  }
}
/*
const mapDispatchToProps = (dispatch) => ({
  removePlayer: (id) => dispatch(removePlayer(id))
});
*/
export default connect(null, {removePlayer})(Player);