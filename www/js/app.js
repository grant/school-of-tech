import React from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'

import '../css/index.styl';

ReactDOM.render(
  <div>Hello nope</div>,
  document.getElementById('App')
);


var socket = io();
socket.on('chat message', function(msg){
  console.log(msg);
});
socket.on('connect', function() {
  console.log('client connected');
  socket.emit('test', {test:''});
});
socket.on('goo', function(gg) {
  console.log(gg);
});
console.log('connecting...');
