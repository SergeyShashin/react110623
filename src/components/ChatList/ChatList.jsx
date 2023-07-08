import './ChatList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ChatList extends Component {

  render() {
    return (
      <div className='chat-list'>
        <h4>Список чатов</h4>        
        <ul>
          <li>Чат1</li>
          <li>Чат2</li>
          <li>Чат3</li>
          <li>Чат4</li>
          <li>Чат5</li>
          <li>Чат6</li>
          <li>Чат7</li>
          <li>Чат8</li>
        </ul>
      </div>
    );
  }

}