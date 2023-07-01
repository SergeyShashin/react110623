import React, { Component } from 'react';

export class MessageForm extends Component {

  state = {
    inputMessage: null
  }

  handlerInput = (event) => {
    this.setState({
      inputMessage: event.target.value
    });
  }

  handlerButtonSend = () => {
    this.props.getInputMessageFunction(this.state.inputMessage);
    this.setState({
      inputMessage: null
    });
  }

  render() {
    return (
      <div>
        <label>
          <input type="text" onChange={this.handlerInput} />
        </label>
        <button onClick={this.handlerButtonSend}>Отправить</button>
      </div >
    );
  }

}