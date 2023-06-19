import React from 'react';
import ReactDom from 'react-dom';

const messages = ['Привет!', 'Как дела?', 'Как погода?'];

const Message = (props) => <div>{props.text}</div>;

const MessageList = (props) => {
  return props.messages.map(message =>
    <Message text={message} />
  );
}

ReactDom.render(
  <MessageList messages={messages} />,
  document.getElementById('root')
);
