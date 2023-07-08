import './MessageForm.scss'

import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

  handleHotKey = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handlerButtonSend();
    }
  }

  render() {
    let { author, text } = this.state;
    return (
      <div className='message-form'>
        <TextField name="author" type="text" onChange={this.handlerInput} value={author} variant='standard' label='Автор' className='author'/>
        <TextField name="text" cols="30" rows="10" onChange={this.handlerInput} onKeyDown={this.handleHotKey} value={text} variant='standard' label='Сообщение' className='text' />
        <Button onClick={this.handlerButtonSend} variant='contained' color='primary'>Отправить</Button>
      </div >
    );
  }

}