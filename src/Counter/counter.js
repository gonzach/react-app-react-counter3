import React from 'react';
import './counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

  incrementCount = () => {number: this.setState({number: this.state.number + 1})};
  decrementCount = () => {number: this.setState({number: this.state.number - 1})};

  render() {
    return (
      <div className="App">
          <button onClick={ this.incrementCount}>+</button >
          <button onClick={ this.decrementCount}>-</button>
          <p>number: {this.state.number}</p>          
      </div>
    );
  }
}

export default Counter;
