import React from "react";

export const Header = (props) => (
  <header>
    <h1>{ props.title }</h1>
    <span className="stats">Players : { props.totalPlayers }</span>
  </header>
);