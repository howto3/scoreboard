import React from "react";
import {Nav, NavItem, NavLink} from "reactstrap";
import {Heroes} from "./Heroes";
import {Register} from "./Register";
import {Route, Switch} from "react-router-dom";

export class Index extends React.Component {
  render() {
    return (
      <>
        <Nav className="mb-3">
          <NavItem>
            <NavLink to="/heroes" className="nav-link">Hero List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/heroes/register" className="nav-link">Register</NavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route path="/heroes/register" component={Register}/>
          <Route path="/heroes" component={Heroes}/>
        </Switch>
      </>
    );
  }
}