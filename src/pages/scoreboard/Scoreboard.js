import React, {Component} from "react";
import styles from './Scoreboard.module.css';
import Header from "./component/Header";
import Player from "./component/Player";
import AddPlayerForm from "./component/AddPlayerForm";
import {connect} from "react-redux";

class Scoreboard extends Component {
  render() {
    return (
      <div className={styles.scoreboard}>
        <Header players = { this.props.players } />
        {
          this.props.players.map(item =>
            <Player
              key={item.id.toString()}
              name={item.name}
              id={item.id}
              score={item.score}
            />)
        }
        <AddPlayerForm/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  players: state.playerReducer.players
});

export default connect(mapStateToProps)(Scoreboard);