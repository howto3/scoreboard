import React, {Component} from "react";
import './App.css';
import {Header} from "./component/Header";
import {Player} from "./component/Player";
import {AddPlayerForm} from "./component/AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {name: "Kim", score: 60, id: 1},
      {name: "LEE", score: 60, id: 2},
      {name: "SEO", score: 60, id: 3},
      {name: "CHO", score: 60, id: 4}
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    });
  };

  grantScore = (act, id, score) => {
    this.setState(prevState => ({
      players: prevState.players.map(item => {
        if (item.id === id) {
          console.log('item.id:', item.id, '/id:', id);
          if (act === "plus") {
            if (item.score > 95) alert("스코어는 100점이 최고입니다.");
            else item.score = item.score + score
          } else if(act === "minus") {
            if (item.score > 0) item.score = item.score - score
            else alert("스코어는 0점이 최저입니다.");
          }
        }
        return item;
      })
    }));
  };

  handleAddPlayer = (name) => {
    let maxId = 0;
    this.state.players.forEach(item => {
      if(item.id > maxId) maxId = item.id;
    });
    // let maxId2 = Math.max(...this.state.players.id);
    // console.log('maxId', maxId2);

    this.setState({
      players: [
        ...this.state.players,
        {id: maxId + 1, name: name, score: 60}
      ]
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players = { this.state.players } />
        {
          this.state.players.map(item =>
            <Player
              key={item.id.toString()}
              name={item.name}
              id={item.id}
              score={item.score}
              removePlayer={this.handleRemovePlayer}
              grantScore={this.grantScore}
            />)
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    )
  }
}

export default App;