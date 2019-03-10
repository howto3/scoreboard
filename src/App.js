import React, {Component} from "react";
import './App.css';
import Player from "./component/Player";
import AddPlayerForm from "./component/AddPlayerForm";
import {connect} from "react-redux";
import Header from "./component/Header";

class App extends Component {

  render() {
    return (
      <div className="scoreboard">
        <Header players = { this.props.players } />
        {
          this.props.players.map(item =>
            <Player
              key={item.id.toString()}
              name={item.name}
              id={item.id}
              score={item.score}
              removePlayer={this.handleRemovePlayer}
              grantScore={this.grantScore}
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

export default connect(mapStateToProps)(App);