## Manual integration with React

## src/components/App.jsx

Реализуйте компонент, который показывает форму и хранит ее состояние в Redux. Форма состоит из двух элементов: текстового поля и кнопки "сброс". В процессе ввода текста он отображается под полем ввода. Если нажать на сброс, текст очищается.

Интерфейс компонента:

`<App dispatch={store.dispatch} text="text from store" {...actionCreators} />`

Начальное состояние:

```
<div>
  <form>
    <input type="text" value="">
    <button type="button">Reset</button>
  </form>
</div>
```

После ввода текста:

```
<div>
  <form>
    <input type="text" value="hello">
    <button type="button">Reset</button>
  </form>
  <div>hello</div>
</div>
```

### src/index.jsx

Реализуйте интеграцию контейнера с реактом.

### src/reducers.js

Добавьте необходимый редьюсер.

### src/actions.js

Добавьте необходимые действия.
