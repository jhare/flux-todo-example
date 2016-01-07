'use strict';

var ReactDom = require('react-dom');
var React = require('react');

var TodoApp = require('./components/TodoApp.react');

ReactDom.render(
  <TodoApp />,
  document.getElementById('todoapp')
);
