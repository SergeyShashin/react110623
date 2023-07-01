import React, { Component } from 'react';

export class MessageForm extends Component {

  state = {
    author: '',
    text: ''
  }

  handlerInput = (event) => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handlerButtonSend = () => {
    let { author, text } = this.state;
    this.props.getInputMessageFunction({ author: author, text: text });
    this.setState({
      text: ''
    });
  }

  render() {
    let { author, text } = this.state;
    return (
      <div>
        <input name="author" type="text" onChange={this.handlerInput} value={author} /><br/>
        <textarea name="text" cols="30" rows="10" onChange={this.handlerInput} value={text}></textarea><br/>
        <button onClick={this.handlerButtonSend}>Отправить</button>
      </div >
    );
  }

}