import React, { Component } from 'react';

export class MessagesList extends Component {

  render() {
    let messages = this.props.messages;
    return (
        <ul>
          {messages.map((message, idx) => <li key={idx}>{message.author}: {message.text}</li>)}
        </ul>
    );
  }

}