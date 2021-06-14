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

  const handleAddTask = (e) => {
    e.preventDefault();
    const { dispatch, text } = props;
    dispatch(addTask({ task: text }));
  }

  const handleRemoveTask = (id) => (e) => {
    e.preventDefault();
    const { dispatch, tasks } = props;
    dispatch(removeTask({ id: id }));
  }

  const handleInput = (e) => {
    e.preventDefault();
    const { dispatch, text } = props;
    dispatch(updateTaskText({ text: e.target.value }));
  };

  const { tasks, text } = props;
  return (
    <>
      <div className="col-5">
        <form action="" className="form-inline" onSubmit={handleAddTask}>
          <div className="form-group mx-sm-3">
            <input type="text" required value={text} onChange={handleInput} />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            Add
          </button>
        </form>
      </div>
      {tasks.length ? (
        <div className="mt-3">
          <ul className="list-group">
            {tasks.map((task) => (
              <li key={task.id} id={task.id} className="list-group-item d-flex">
                <span className="mr-auto">{task.task}</span>
                <button
                  type="button"
                  className="close"
                  onClick={handleRemoveTask(task.id)}
                >
                  <span>&times;</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  )
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


