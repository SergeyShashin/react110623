import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    let { counter } = this.state;
    return (

      <div>
        <button>+</button>
        <div>{counter}</div>
        <button>-</button>
      </div>
    );
  }


}