import React from "react";
import axios from "axios";

export class Hero extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  state = {
    hero_id: 0,
    hero: []
  };

  async componentDidMount() {
    await this.getHero(this.props.match.params['hero_id']);
  }

  async componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps', newProps);
    await this.getHero(newProps.match.params['hero_id']);
  }

  getHero = async (hero_id) => {
    const res = await axios.get(
      `http://eastflag.co.kr:8080/api/hero/${hero_id}`
    );
    this.setState({
      hero: res.data,
      hero_id
    });
  };

  imgValidation = (src) => {
    let rtnImg = process.env.PUBLIC_URL + '/images/baseline-face-24px.svg';
    if (src && typeof(src) !== "undefined" && src !== "undefined") {
      rtnImg = src;
    }
    return rtnImg;
  };

  render() {
    return (
      this.state.hero ?
        <div>
          <div className="form-group mt-1">
            <label htmlFor="name">Id:</label>
            <p className="form-control form-control-sm" id="hero_id">{this.state.hero.hero_id}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="name">Name:</label>
            <p className="form-control form-control-sm" id="name">{this.state.hero.name}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="email">Email Address:</label>
            <p className="form-control form-control-sm" id="email">{this.state.hero.email}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="sex">Sex:</label>
            <p className="form-control form-control-sm" id="sex">{this.state.hero.sex}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="country">Country:</label>
            <p className="form-control form-control-sm" id="country">{this.state.hero.country}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="power">Power:</label>
            <p className="form-control form-control-sm" id="power">{this.state.hero.power}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="power">Photo:</label>
            <img src={this.imgValidation(this.state.hero.photo)} alt={this.state.hero.name}/>
          </div>
          <hr className="my-5" />
        </div>
        :
        'Not Found Data.'
    );
  }
}