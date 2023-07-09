import React, { Component } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import { MessageForm } from 'components/MessageForm';
import { Layout } from 'components/Layout';

export class Messenger extends Component {

  state = {
    messages: []
  }

  componentDidUpdate() {
    let { author } = this.state.messages[this.state.messages.length - 1];
    if (author !== 'Bot') {
      setTimeout(() => {
        this.setState({ messages: this.state.messages.concat({ author: 'Bot', text: `${author}, здравствуйте!` }) })
      }, 1000)
    }

  }

  getInputMessage = (message) => {
    this.setState(({ messages }) => ({ messages: messages.concat([message]) }));
  }

  render() {
    let { messages } = this.state;
    return (
      <div>
        <Layout items={messages} />
        <MessageForm getInputMessageFunction={this.getInputMessage} />
      </div>
    );
  }

}