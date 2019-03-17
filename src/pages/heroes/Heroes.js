import React from "react";
import axios from "axios";
import Pagination from "rc-pagination";
import 'rc-pagination/dist/rc-pagination.css';
import {PaginationItem, PaginationLink} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import {Hero} from "./Hero";

export class Heroes extends React.Component {
  state = {
    pageSize: 9,
    totalCount: 0,
    currentPage: 1,
    heroes: []
  };

  async componentDidMount() {
    await this.getHeroes();
  }

  getHeroes = async () => {
    const res = await axios.get(
      `http://eastflag.co.kr:8080/api/paged_heroes?start_index=${this.state.pageSize * (this.state.currentPage - 1)}&page_size=${this.state.pageSize}`
    );
    this.setState({
      heroes: res.data.data,
      totalCount: res.data.total
    });
  };

  imgValidation = (src) => {
    let rtnImg = process.env.PUBLIC_URL + '/images/baseline-face-24px.svg';
    if (src && typeof(src) !== "undefined" && src !== "undefined") {
      rtnImg = src;
    }
    return rtnImg;
  };

  onChange = (page) => {
    this.setState({currentPage: page}, async () => {
      await this.getHeroes();
    });
  };

  handleClick = (event, hero_id) => {
    event.preventDefault();
    this.props.history.push(`/heroes/hero/${hero_id}`);
  };

  render() {
    return (
      <>
        <Switch>
          <Route path="/heroes/hero/:hero_id" component={Hero}/>
        </Switch>
        <div className="card-columns">
          {this.state.heroes.map(hero => (
            <div className="card" key={hero.hero_id} onClick={(e) => this.handleClick(e, hero.hero_id)} style={{cursor: 'pointer'}}>
              <img src={this.imgValidation(hero.photo)}
                   style={{width: '100%'}} alt={hero.name}/>
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
                <p className="card-text">email: {hero.email}</p>
                <p className="card-text">sex: {hero.sex}</p>
              </div>
            </div>
          ))}
        </div>
        <Pagination total={this.state.totalCount} current={this.state.currentPage} pageSize={this.state.pageSize}
                    onChange={this.onChange} className="d-flex justify-content-center">
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              3
              </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              4
              </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              5
              </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination>
      </>
    );
  }
}