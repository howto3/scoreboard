import React from "react";

export class AddPlayerForm extends React.Component {
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
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.textInput} placeholder="enter a player's name" required/>
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}