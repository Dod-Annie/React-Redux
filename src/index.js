import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { counter } from './index.redux'

const store = createStore(counter, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'))

registerServiceWorker();

// import { createStore } from 'redux'

// function counter(state = 0, action) {
//   switch (action.type) {
//     case '加机关枪':
//       return state + 1
//     case '减机关枪':
//       return state - 1
//     default:
//       return 10
//   }
// }

// const store = createStore(counter)

// const init = store.getState()
// console.log(init)

// function listener(){
//   const current = store.getState()
//   console.log(`现在有机枪${current}把`)
// }
// store.subscribe(listener)


// store.dispatch({type:'加机关枪'})
// store.dispatch({type:'减机关枪'})
