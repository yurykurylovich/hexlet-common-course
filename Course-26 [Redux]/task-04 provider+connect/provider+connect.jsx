/* Todo.jsx
Write a simple todo-app with two functions: one can add tasks and delete them.
Use react-redux library syntax.
*/

import React from "react";
import _ from "lodash";
import {combineReducers, createStore} from "redux";
import {connect, Provider} from "react-redux";
import {render} from "react-dom";

/////////////////////////////////////// ACTIONS:
const updateTaskText = (text) => ({
  type: 'UPDATE_TEXT',
  payload: text,
})

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
})

const removeTask = (id) => ({
  type: 'REMOVE_TASK',
  payload: id,
})

/////////////////////////////////////// REDUCERS:
const text = (state = "", action) => {
  switch (action.type) {
    case ('UPDATE_TEXT'):
      return action.payload.text;
    case ('ADD_TASK'):
      return "";
    default:
      return state;
  }
}

const tasks = (state = [], action) => {
  switch (action.type) {
    case ('ADD_TASK'):
      return [{id: _.uniqueId(), task: action.payload.task}, ...state];
    case ('REMOVE_TASK'):
      return state.filter((task) => task.id !== id);
    default:
      return state;
  }
}

const reducers = combineReducers({
  text,
  tasks,
});

/////////////////////////////////////// APP:
const mapStateToProps = (state) => {
  const { tasks, text } = state;
  const props = { tasks, text };
  return props;
};

const AppClass = (props) => {

}

const App = connect(mapStateToProps)(AppClass);

/////////////////////////////////////// RENDER:
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("container")
)


