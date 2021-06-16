## Transfer of actions

Реализуйте компонент `<Panel />`, который добавит в наше приложение две кнопки:

* `Generate` - создает 5 новых (и случайных) задач взамен уже добавленных
* `Clean` - очищает текущий список задач

### actions/index.js

Реализуйте необходимые действия.

### reducers/index.js

Реализуйте необходимые обработчики.

### components/Panel.js

Реализуйте необходимую логику.

### components/Tasks.js

Реализуйте компонент `<Tasks />`, отвечающий за вывод добавленных задач.

Для создания новой задачи используйте такую конструкцию:

`{ id: _.uniqueId(), text: faker.lorem.sentence() };`

HTML

```
<div class="col-5">
  <form action="" class="form-inline">
    <div class="form-group mx-sm-3">
      <input type="text" required="" value="">
    </div>
    <input type="submit" class="btn btn-primary btn-sm" value="Add">
  </form>
  <div class="py-3">
    <button type="button" data-test="clean" class="btn btn-warning btn-sm mr-3">Clean</button>
    <button type="button" data-test="generate" class="btn btn-primary btn-sm">Generate</button>
  </div>
  <div class="mt-3">
    <ul class="list-group">
      <li class="list-group-item d-flex">
        <span class="mr-auto">Quia voluptatem quia et vel assumenda rerum quas.</span>
        <button type="button" class="close"><span>×</span></button>
      </li>
    </ul>
  </div>
</div>
```
