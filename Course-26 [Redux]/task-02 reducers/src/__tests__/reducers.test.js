import { createStore } from 'redux';
import reducers from '../reducers.js';
import {
  addTask, removeTask, addTaskComment, removeTaskComment,
} from '../actions.js';

const buildTask = (id) => ({ id });
const buildComment = (id, task) => ({ id, taskId: task.id });

test('Store', () => {
  const store = createStore(reducers);
  expect(store.getState()).toEqual({
    comments: {},
    tasks: {},
  });

  store.dispatch(removeTask(1));
  expect(store.getState()).toEqual({
    comments: {},
    tasks: {},
  });

  const task1 = buildTask(1);
  store.dispatch(addTask(task1));
  expect(store.getState()).toEqual({
    comments: {},
    tasks: { 1: task1 },
  });

  const task2 = buildTask(2);
  store.dispatch(addTask(task2));
  expect(store.getState()).toEqual({
    comments: {},
    tasks: { 1: task1, 2: task2 },
  });

  const comment1 = buildComment(1, task1);
  store.dispatch(addTaskComment(comment1));
  expect(store.getState()).toEqual({
    comments: {
      1: comment1,
    },
    tasks: {
      1: task1,
      2: task2,
    },
  });

  const comment2 = buildComment(2, task2);
  store.dispatch(addTaskComment(comment2));
  expect(store.getState()).toEqual({
    comments: {
      1: comment1,
      2: comment2,
    },
    tasks: {
      1: task1,
      2: task2,
    },
  });

  const comment3 = buildComment(3, task2);
  store.dispatch(addTaskComment(comment3));
  expect(store.getState()).toEqual({
    comments: {
      1: comment1,
      2: comment2,
      3: comment3,
    },
    tasks: {
      1: task1,
      2: task2,
    },
  });

  store.dispatch(removeTask(task2.id));
  expect(store.getState()).toEqual({
    comments: { 1: comment1 },
    tasks: { 1: task1 },
  });

  store.dispatch(removeTaskComment(comment1.id));
  expect(store.getState()).toEqual({
    comments: {},
    tasks: { 1: task1 },
  });
});
