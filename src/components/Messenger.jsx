import React, { Component } from 'react';
import { MessageForm } from './MessageForm';
import { MessagesList } from './MessagesList';


const messages = ['Как дела?', 'Как погода?', 'Как настроение?'];

export class Messenger extends Component {

  state = {
    messages: [{ author: 'Дмитрий', text: 'Привет!' }]
  }

  interval = null;

  componentDidMount() {
    this.interval = setInterval(() => {
      let randomIdx = Math.floor(Math.random() * messages.length);

      this.setState({ messages: this.state.messages.concat({ author: 'Дмитрий', text: messages[randomIdx] }) })
    }, 5000)
  }

  componentDidUpdate() {
    setInterval(() => {
      if (this.state.messages[this.state.messages.length-1].author !== 'Bot') {
        this.setState({ messages: this.state.messages.concat({ author: 'Bot', text: 'Бот приветствует Вас!' }) })
      }

    }, 1000)

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let { messages } = this.state;
    return (
      <div>
        <ul>
          {messages.map((message, idx) => <li key={idx}>{message.author}: {message.text}</li>)}
        </ul>
      </div >
    );
  }

}