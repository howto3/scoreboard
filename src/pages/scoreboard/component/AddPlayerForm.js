import React from "react";
import {addPlayer} from "../redux/action";
import {connect} from "react-redux";
import styles from "../Scoreboard.module.css";

class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: ''
    }
  }

  textInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.textInput.current.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input className={styles.input} type="text" ref={this.textInput} placeholder="enter a player's name" required/>
        <input className={styles.input} type="submit" value="Add Player"/>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addPlayer: (name) => dispatch(addPlayer(name))
});

export default connect(null, mapDispatchToProps)(AddPlayerForm);