import generateStore from '../store.js';
import { addTask, removeTask } from '../actions.js';

test('Store 1', () => {
  const store = generateStore();
  store.dispatch({ type: 'unknown' });
  expect(store.getState()).toEqual({});
});

test('Store 2', () => {
  const task0 = { id: 0 };
  const store = generateStore({ [task0.id]: task0 });
  store.dispatch({ type: 'unknown' });
  expect(store.getState()).toEqual({ [task0.id]: task0 });

  const task1 = { id: 1 };
  store.dispatch(addTask(task1));
  expect(store.getState()).toEqual({ [task0.id]: task0, [task1.id]: task1 });

  const task2 = { id: 2 };
  store.dispatch(addTask(task2));
  expect(store.getState()).toEqual({ [task0.id]: task0, [task1.id]: task1, [task2.id]: task2 });

  const task3 = { id: 3 };
  store.dispatch(addTask(task3));
  const result = {
    [task0.id]: task0,
    [task1.id]: task1,
    [task2.id]: task2,
    [task3.id]: task3,
  };
  expect(store.getState()).toEqual(result);

  store.dispatch(removeTask(2));
  expect(store.getState()).toEqual({ [task0.id]: task0, [task1.id]: task1, [task3.id]: task3 });

  store.dispatch(removeTask(10));
  expect(store.getState()).toEqual({ [task0.id]: task0, [task1.id]: task1, [task3.id]: task3 });

  store.dispatch(removeTask(3));
  expect(store.getState()).toEqual({ [task0.id]: task0, [task1.id]: task1 });

  store.dispatch({ type: 'TASK_REMOVE', payload: { id: 1 } });
  expect(store.getState()).toEqual({ [task0.id]: task0 });

  store.dispatch({ type: 'TASK_REMOVE', payload: { id: 0 } });
  expect(store.getState()).toEqual({});
});
