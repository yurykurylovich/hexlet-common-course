## Reducers

### reducers.js

Реализуйте в *Store* следующую структуру состояния:

```
{
  comments: {
    1: { id: 1, taskId: 1, body: 'comment 1' },
    2: { id: 2, taskId: 1, body: 'comment 2' },
    5: { id: 5, taskId: 2, body: 'another comment' },
  },
  tasks: {
    1: { id: 1, name: 'first task' },
    2: { id: 2, name: 'second task' },
  },
}
```

*Store* должен уметь обрабатывать перечисленные в файле `actions.js` действия.
