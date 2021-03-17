import React from 'react'
import { Router, Route} from 'react-router'
import { createBrowserHistory } from "history";

import ReactDOM from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css'
import App from './App'
import About from './pages/About'
import reducer from './reducers'
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router history={history}>
      <Route path="/" exact component={App}/>
      <Route path="/about" component={About}/>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
