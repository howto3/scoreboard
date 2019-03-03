import React from "react";
import './App.css';
import {Header} from "./component/Header";
import {Player} from "./component/Player";

class App extends React.Component {
  state = {
    players: [
      {name: "KIM", id: 1},
      {name: "LEE", id: 2},
      {name: "SEO", id: 3},
      {name: "CHO", id: 4}
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id != id)
      }
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={ this.state.players.length } />
        {
          this.state.players.map(item =>
            <Player
              name={ item.name }
              score={ item.score }
              key={ item.id.toString() }
              removePlayer={ this.handleRemovePlayer }
              id={item.id}
            />)
        }
      </div>
    )
  }
}

export default App;