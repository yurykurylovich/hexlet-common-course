/* Generate-Clear
Add up Panel component to the previous app that has Generate and Clear buttons: Generate returns 5 more random tasks instead of the existing ones and Clear removes all tasks.
*/

// showcase on CODEPEN: https://codepen.io/yury-kurylovich/pen/LYWMrdv

// solution
////// actions
const updateTask = (text) => ({
  type: 'UPDATE_TASK',
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
const generateTasks = () => ({
  type: 'GENERATE',
  payload: {},
})
const cleanTasks = () => ({
  type: 'CLEAN',
  payload: {},
})

////// reducers
const text = (state = "", action) => {
  switch (action.type) {
    case ('UPDATE_TASK'): {
      return action.payload.text;
    }
    case ('ADD_TASK'): {
      return '';
    }
    default:
      return state;
  }
};

const tasks = (state = [{id: "1", task: "If you live to be 70 years old you will spend TEN YEARS of your life on Monday."}, {id: "2", task: "Sometime in the future, someone will say your name for the last time."}, {id: "3", task: "Outer space isn’t empty, it literally contains everything there is."}], action) => {
  switch (action.type) {
    case ('ADD_TASK'):
      const task = action.payload.task;
      return [{ id: _.uniqueId(), text: task }, ...state];

    case ('REMOVE_TASK'):
      const id = action.payload.id;
      return state.filter(task => task.id !== id);
    case ('GENERATE'):
      let tasks = [];
      _.times(5, () => tasks.push({ id: _.uniqueId(), task: txtgen.sentence()}));
      return tasks;
    case ('CLEAN'):
      return [];
    default:
      return state;
  }
};

////// mapstatetoprops
const mapStateToProps = (state) => {
  const { tasks, text } = state;
  const props = {
    tasks,
    text
  }
  return props;
};

////// actionCreators
const actionCreators = {
  generateTasks: generateTasks,
  cleanTasks: cleanTasks,
};

////// clean/generate component
const ButtonsPanel = (props) => {
  const handleGenerate = (e) => {
    e.preventDefault();
    const { generateTasks } = props;
    generateTasks()
  }
  const handleClean = (e) => {
    e.preventDefault();
    const { cleanTasks } = props;
    cleanTasks()
  }

  return (
    <div className="py-3">
      <button type="button" data-test="clean" onClick={handleClean} className="py-2 px-4 font-semibold rounded-lg text-white bg-green-500 hover:bg-green-900 shadow-md mr-3">Clean</button>
      <button type="button" data-test="generate" onClick={handleGenerate} className="py-2 px-4 font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-600 shadow-md">Generate</button>
    </div>
  )
}

////// connect component with state
const Panel = connect(mapStateToProps, actionCreators)(ButtonsPanel);

////// main component
const App = (props) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const { dispatch, text } = props;
    dispatch(addTask({ task: text }))
  }
  const handleInput = (e) => {
    e.preventDefault();
    const { dispatch, text } = props;
    dispatch(updateTask({ text: e.target.value }))
  }
  const handleRemove = (id) => (e) => {
    e.preventDefault();
    const { dispatch, tasks } = props;
    dispatch(removeTask({ id: id }))
  }
  const { tasks, text } = props;
  console.log(tasks)
  return (
    <div>
      <div>
        <form action="" className="form-inline flex items-center" onSubmit={handleAddTask}>
          <div className="">
            <input type="text" required value={text} onChange={handleInput} placeholder='Type something'
                   className="shadow-md w-80 my-5 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent rounded-lg py-2 px-2 mr-4"/>
          </div>
          <button type="submit" className="py-2 px-4 font-semibold rounded-lg text-white bg-yellow-800 hover:bg-yellow-900 shadow-lg">Add</button>
        </form>
      </div>
      <Panel />
      {tasks ? (
        <div className="mt-3">
          <ul className="space-y-4">
            {tasks.map((task) => (<li key={task.id} id={task.id} className="flex block shadow-lg bg-white py-4 px-4 rounded-lg w-2/3  justify-between items-center">
              <span className="mr-auto  pr-4 text-black">{task.task}</span>
              <button type="button" className="close py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-400 hover:bg-red-600" onClick={handleRemove(task.id)}>
                <span>&times;</span>
              </button>
            </li>))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

const A = connect(mapStateToProps)(App);

////// commonReducer, store, rendering by provider
const reducers = combineReducers({
  text,
  tasks,
});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
render(
  <Provider store={store}>
    <A />
  </Provider>,
  document.getElementById('container'),
)
