import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const store = this.props.store
    const num = store.getState()
    const addGUN = this.props.addGUN
    const removeGUN = this.props.removeGUN
    return (
      <div>
        <h1>现在有{num}把枪</h1>
        <button onClick={() => store.dispatch(addGUN())}> 申请武器</button>
        <button onClick={() => store.dispatch(removeGUN())}> 上交武器</button>
      </div>
    )
  }
}

export default App
