import React from 'react';
import './App.css';
import CounterGroup from './CounterGroup/counterGroup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counterAmount: 0};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CounterGroup defaultCounts={3}/>
        </header>
      </div>
    );
  }
}

export default App;
