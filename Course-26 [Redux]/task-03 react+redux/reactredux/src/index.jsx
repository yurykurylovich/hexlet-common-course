import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';

import App from './components/App.jsx';
import reducers from './reducers.js';
import { updateText, resetText } from './actions.js';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const render = (text) => {
  ReactDOM.render(
    <App
      dispatch={store.dispatch}
      updateText={updateText}
      resetText={resetText}
      text={text}
    />,
    document.getElementById('container'),
  )
}

store.subscribe(() => {
  const text = store.getState();
  render(text);
})

render();
