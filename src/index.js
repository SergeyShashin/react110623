import 'assets/global.css';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Messenger } from './components/Messenger';
import { AboutPage } from "pages/AboutPage";

import { routes } from './routes';


ReactDom.render(
  // <BrowserRouter>
  //   <Routes>
  //     {routes.map((route, idx) => <Route key={idx} {...route} />)}
  //   </Routes>
  // </BrowserRouter>,
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Messenger />} />
      <Route path='/chats/:id' element={<Messenger />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
