import React from 'react';
import ReactDom from 'react-dom';
<<<<<<<<< Temporary merge branch 1
<<<<<<< HEAD
import {App} from './components/App.jsx';
=======
>>>>>>> ff73646813d13c0b786d49206f5bcf5e1e960f66
=========
import {App} from 'components/App';
>>>>>>>>> Temporary merge branch 2

const messages = ['Привет!', 'Как дела?', 'Как погода?'];



ReactDom.render(
<<<<<<<<< Temporary merge branch 1
<<<<<<< HEAD
  <App />,
=======
  <MessageList messages={messages} />,
>>>>>>> ff73646813d13c0b786d49206f5bcf5e1e960f66
=========
  <App />,
>>>>>>>>> Temporary merge branch 2
  document.getElementById('root')
);
