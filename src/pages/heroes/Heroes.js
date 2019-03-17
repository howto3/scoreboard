import React from "react";
import axios from "axios";
import styles from './Heroes.module.scss';

export class Heroes extends React.Component {
  state = {
    heroes: []
  };

  componentDidMount() {
    this.getHeroes();
  }

  getHeroes = async () => {
    const res = await axios.get('http://eastflag.co.kr:8080/api/heroes')
    this.setState({heroes: res.data});
  };

  render() {
    return (
      <ul className={styles["img-box"]}>
        {this.state.heroes.map(hero => (
          <li key={hero.hero_id} className="row align-items-center m-0">
            <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'} alt={hero.name}
                 className="img-fluid rounded-circle" />
            <span className="col">{hero.name}</span>
          </li>
        ))}
      </ul>
    );
  }
}