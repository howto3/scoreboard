import PropTypes from 'prop-types';
import React from "react";
import {connect} from "react-redux";
import {changeScore} from "../redux/action";
import classNames from "classnames";
import styles from "../Scoreboard.module.css";

const Counter = (props) => {
  const {changeScore, id, score} = props;

  return (
    <div className={styles.counter}>
      <button className={classNames(styles["counter-action"], styles.decrement)} onClick={() => changeScore('minus', id, 5)}>-</button>
      <span className={styles["counter-score"]}>{score}</span>
      <button className={classNames(styles["counter-action"], styles.increment)} onClick={() => changeScore('plus', id, 5)}>+</button>
    </div>
  )
};

Counter.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  changeScore: (act, id, delta) => dispatch(changeScore(act, id, delta))
});

export default connect(null, mapDispatchToProps)(Counter);