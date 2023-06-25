import React, { Component } from 'react';
import { Counter } from 'components/Counter';

export class App extends Component {

  state = {
    flag: false
  }

  handleClickToggle = () => {
    this.setState((prevState) => ({
      flag: !prevState.flag
    }));
  }

  render() {
    let { flag } = this.state;
    return (
      <div>
        <button onClick={this.handleClickToggle}>Toggle</button>
        {flag && <Counter/>}
      </div >
    );
  }

}