import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class Counter extends Component {
  static propTypes = {
    initial: PropTypes.number.isRequired
  };

  static defaultProps = {
    initial: 0
  }


  state = {
    counter: this.props.initial,
  };

  newInterval = null;

  handleClick = (event) => {
    this.setState((prevState) => ({
      counter: prevState.counter + +event.target.name
    }));
  }

  componentDidMount() {
    this.newInterval = setInterval(() => { console.log('Fire'); }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.newInterval);
  }


  render() {
    let { counter } = this.state;
    return (
      <div>
        <button name='+1' onClick={this.handleClick}>+</button>
        <div>{counter}</div>
        <button name='-1' onClick={this.handleClick}>-</button>
      </div >
    );
  }

}