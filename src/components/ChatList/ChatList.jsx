import './ChatList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

export class ChatList extends Component {

  render() {
    return (
      <div className='chat-list'>
        <h4>Список чатов</h4>        
        <List>
          <ListItem>
            <Link to='chats/1'>
              <ListItemText primary="Chat1"></ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <Link to='chats/2'>
              <ListItemText primary="Chat2"></ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <Link to='chats/3'>
              <ListItemText primary="Chat3"></ListItemText>
            </Link>
          </ListItem>
        </List>
      </div>
    );
  }

}