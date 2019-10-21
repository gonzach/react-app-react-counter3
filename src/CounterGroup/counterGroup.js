import React, { Component } from 'react';
import './counterGroup.css';
import Counter from './counter/counter';

class CounterGroup extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            counterCounts: this.props.defaultCounts, 
            inputValue: this.props.defaultCounts,
            sum: 0
        }
    }

    counterUpdateCallback = () => {
        this.setState({ sum:this.state.sum + changeNum})
    };

    handleInputChange = (event) => {
        this.setState({inputValue: event.target.value})
    };

    regenerateCounter = () => {
        this.setState({counterCounts: this.state.inputValue})
    };

    renderCounter = () => {
        let counters  = [];
        for (let count = 0; count < this.state.counterCounts; count++){
            counters.push(
                <Counter 
                    key={count}
                    onCounterValueCahnge = {this.counterUpdateCallback}
                />
            )
        }
        return counters; 
    };

    render() {
        let counters  = this.rendersCounters();
        return (
        <div className = "counter-group">
            <div className="regenerate">
                <input type="text" value={this.state.inputValue} 
                                   onchange={this.handleInputChange}/>
                <button onClick={this.regenerateCounters}>Renegerate Counters</button>
                <span>Sum: {this.state.sum}</span>   
            </div>
            <div>
                {counters}
            </div>
        </div>
        )
    }
}

export default CounterGroup;