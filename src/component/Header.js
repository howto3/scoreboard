import React from "react";
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateTitle} from "../redux/action";

const Header = ({title, players, changeTitle}) => {
  return (
    <header>
      <Stats players = { players } />
      <h1 onClick={changeTitle}>{ title }</h1>
      <Stopwatch />
    </header>
  )
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    score: PropTypes.number,
    name: PropTypes.string
  }))
};

Header.defaultProps = {
  title: "Scoreboard"
};

let mapStateToProps = (state) => ({
  title: state.playerReducer.title
});

let mapDispatchToProps = (dispatch) => ({
  changeTitle: () => dispatch(updateTitle('dispatch title'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);