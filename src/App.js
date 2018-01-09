import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addGUN, removeGUN, addGunAsync } from './index.redux'
import axios from 'axios'

const mapStatetoProps = (state) => {
  return { num: state }
}

const actionCreators = { addGUN, removeGUN, addGunAsync }

// App = connect(mapStatetoProps, actionCreators)(App)

@connect(mapStatetoProps, actionCreators)
class App extends Component {
  componentDidMount(){
    axios.get('/data')
    .then(res=>{
      console.log(res)
    })
  }
  render() {
    const num = this.props.num
    const addGUN = this.props.addGUN
    const removeGUN = this.props.removeGUN
    const addGunAsync = this.props.addGunAsync
    return (
      <div>
        <h1>现在有{num}把枪</h1>
        <button onClick={addGUN}> 申请武器</button>
        <button onClick={removeGUN}> 上交武器</button>
        <button onClick={addGunAsync}> 拖两天再给</button>
      </div>
    )
  }
}




export default App
