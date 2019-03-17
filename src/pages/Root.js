import React from "react";
import {Heroes} from "./heroes/Heroes";
import {Home} from "./Home";
import Scoreboard from "./scoreboard/Scoreboard";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Menu} from "./Menu";

export class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Menu/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/heroes" component={Heroes}></Route>
            <Route path="/scoreboard" component={Scoreboard}></Route>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}