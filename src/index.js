import React from 'react';
import ReactDom from 'react-dom';
<<<<<<<<< Temporary merge branch 1
=========
import {App} from './components/App.jsx';
>>>>>>>>> Temporary merge branch 2

const messages = ['Привет!', 'Как дела?', 'Как погода?'];

const Message = (props) => <div>{props.text}</div>;

const MessageList = (props) => {
  return props.messages.map(message =>
    <Message text={message} />
  );
}

ReactDom.render(
<<<<<<<<< Temporary merge branch 1
  <MessageList messages={messages} />,
=========
  <App />,
>>>>>>>>> Temporary merge branch 2
  document.getElementById('root')
);
