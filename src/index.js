import React from 'react';
import ReactDom from 'react-dom';
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);

let element = React.createElement(
  'h1',
  { className: 'react-hello' },
  'Привет! Реакт работает!'
);

// root.render(element);

console.log(document.getElementById('root'));

ReactDom.render(
  element,
  document.getElementById('root')
);

