import React from 'react';
import './counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

  render() {
    return (
      <div className="App">
          <button onClick={() =>{this.setState(this.incrementCount)}}>+</button >
          <span>{this.state.number}</span>   
          <button onClick={() =>{this.setState(this.decrementCount)}}>-</button>
      </div>
    );
  }

  incrementCount = () => {this.setState({number: this.state.number + 1})
                          this.props.onCounterValueChange(1)}
  decrementCount = () => {this.setState({number: this.state.number - 1})
                          this.props.onCounterValueChange(-1)}
}


export default Counter;
