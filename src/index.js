import React from 'react';
import ReactDom from 'react-dom';
<<<<<<< HEAD
import {App} from './components/App.jsx';
=======
>>>>>>> ff73646813d13c0b786d49206f5bcf5e1e960f66

const messages = ['Привет!', 'Как дела?', 'Как погода?'];

const Message = (props) => <div>{props.text}</div>;

const MessageList = (props) => {
  return props.messages.map(message =>
    <Message text={message} />
  );
}

ReactDom.render(
<<<<<<< HEAD
  <App />,
=======
  <MessageList messages={messages} />,
>>>>>>> ff73646813d13c0b786d49206f5bcf5e1e960f66
  document.getElementById('root')
);
