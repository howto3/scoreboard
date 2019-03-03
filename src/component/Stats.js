import React from "react";

export const Stats = (props) => {
  const totalPlayers = props.players.length;
  // const totalScore = props.players.reduce((total, player) => total + player.score, 0);
  let totalScore = 0; // forEach
  props.players.forEach(item => totalScore += item.score);

  return (
    <table className="stats">
      <tbody>
      <tr>
        <td>Players :</td>
        <td>{ totalPlayers }</td>
      </tr>
      <tr>
        <td>Total Point :</td>
        <td>{ totalScore }</td>
      </tr>
      </tbody>
    </table>
  )
};