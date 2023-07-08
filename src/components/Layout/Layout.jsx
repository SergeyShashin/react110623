import './Layout.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';
import { MessagesList } from 'components/MessagesList';

export class Layout extends Component {

  render() {
    return (
      <div className='layout'>
        <h2>
          <Header />
        </h2>
        <div className='lists'>
          <ChatList />
          <MessagesList items={this.props.items} />
        </div>
      </div>
    );
  }

}