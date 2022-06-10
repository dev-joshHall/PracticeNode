import NavBar from './components/navbar';
import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = {
        counters: [
            {id: 1, value: 0, selected: true, item: "Milk"},
            {id: 2, value: 0, selected: true, item: "Eggs"},
            {id: 3, value: 0, selected: true, item: "Turkey"},
            {id: 4, value: 0, selected: true, item: "Sunglasses"},
        ],
    }

    handleDelete = (compId) => {
        const counters = this.state.counters.filter(c => c.id !== compId);
        this.setState({counters: counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    }

    handleAddItem = () => {
        
    }

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        if (counters[index].value > 0) {
          counters[index].value--;
          this.setState({counters});
        }
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters})
    }
  render() { 
    return (
    <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className='container'>
        <Counters
        counters={this.state.counters} 
        onReset={this.handleReset}
        onAddItem={this.handleAddItem}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        />
      </main>
    </React.Fragment>
    
  );
  }
}
export default App;
