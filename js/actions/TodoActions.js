'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

function create(text) {
  AppDispatcher.dispatch({
    actionType: TodoConstants.TODO_CREATE,
    text: text
  });
}

function updateText(id, text) {
  AppDispatcher.dispatch({
    actionType:TodoConstants.TODO_UPDATE_TEXT,
    id: id,
    text: text
  });
}

function toggleComplete(todo) {
  var id = todo.id;
  var actionType = todo.complete ? TodoConstants.TODO_UNDO_COMPLETE : TodoConstants.TODO_COMPLETE;
  AppDispatcher.dispatch({
    actionType: actionType,
    id: id
  });
}

function toggleCompleteAll() {
  AppDispatcher.dispatch({
    actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
  });
}

function destroy(id) {
  AppDispatcher.dispatch({
    actionType: TodoConstants.TODO_DESTROY,
    id: id
  });
}

function destroyCompleted() {
  AppDispatcher.dispatch({
    actionType: TodoConstants.TODO_DESTROY_COMPLETED
  });
}

var TodoActions = {
  create: create,
  updateText: updateText,
  toggleComplete: toggleComplete,
  toggleCompleteAll: toggleCompleteAll,
  destroy: destroy,
  destroyCompleted: destroyCompleted
};

module.exports = TodoActions;
