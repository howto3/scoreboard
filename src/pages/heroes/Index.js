import React, {Fragment} from "react";
import {Heroes} from "./Heroes";
import {Register} from "./Register";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import {Nav, NavItem} from "reactstrap";
import './Index.scss';

export class Index extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav className="mb-3">
          <NavItem>
            <NavLink to="/heroes/hero" className="nav-link">Hero List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/heroes/register" className="nav-link">Register</NavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route path="/heroes/hero" component={Heroes}/>
          <Route path="/heroes/register" component={Register}/>
          <Route path="/heroes" render={() => <Redirect to="/heroes/hero" />} />
        </Switch>
      </Fragment>
    );
  }
}