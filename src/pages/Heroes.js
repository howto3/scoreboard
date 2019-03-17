import React from "react";
import axios from "axios";

export class Heroes extends React.Component {
  state = {
    heroes: []
  };

  componentDidMount() {
    this.getHeroes();
  }

  getHeroes = async () => {
    await axios.get('http://eastflag.co.kr:8080/api/heroes').then(
      res =>
        this.setState({
          heroes: res.data
        })
    );
  };

  render() {
    return (
      <ul>
        {this.state.heroes.map(hero => (
          <li key={hero.hero_id}>
            <img src={hero.photo} alt={hero.name} onError={(e) => {e.target.onerror = null; e.target.src = "https://via.placeholder.com/100"}}/>
            <span>{hero.name}</span>
          </li>
        ))}
      </ul>
    );
  }
}