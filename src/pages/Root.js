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
          <div className="container" style={{backgroundColor: '#ffffff'}}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/heroes" component={Heroes}/>
              <Route path="/scoreboard" component={Scoreboard}/>
            </Switch>
          </div>
        </>
      </BrowserRouter>
    );
  }
}