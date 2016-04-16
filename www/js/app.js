import React from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'
import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'
import App from './components/App'
import { Provider } from 'react-redux';
import { browserHistory, Router, Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Create the store with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
import rootReducer from './reducers/rootReducer';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

// Make reducers hot reloadable, see http://stackoverflow.com/questions/34243684/make-redux-reducers-and-other-non-components-hot-loadable
if (module.hot) {
  module.hot.accept('./reducers/rootReducer', () => {
    const nextRootReducer = require('./reducers/rootReducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

// Import CSS
import '../css/index.styl';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('App')
);

var socket = io();
socket.on('chat message', function (msg) {
  console.log(msg);
});
socket.on('connect', function () {
  console.log('client connected');
  socket.emit('test', {test: ''});
});
socket.on('goo', function (gg) {
  console.log(gg);
});
console.log('connecting...');
