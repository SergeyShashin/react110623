import React from 'react';
import ReactDom from 'react-dom';
import {App} from './components/App.jsx';

const messages = ['Привет!', 'Как дела?', 'Как погода?'];

const Message = (props) => <div>{props.text}</div>;

const MessageList = (props) => {
  return props.messages.map(message =>
    <Message text={message} />
  );
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);
