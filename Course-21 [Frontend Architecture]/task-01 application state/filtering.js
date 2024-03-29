const notebooks = [
  {
    model: 'v1', processor: 'intel', frequency: 1.7, memory: 16,
  },
  {
    model: 'd3', processor: 'intel', frequency: 3.5, memory: 8,
  },
  {
    model: 'd2', processor: 'amd', frequency: 2.5, memory: 16,
  },
];

// This solution is kind of library. It can work with any forms without changing main logic.
// Just by adding as many predicates as needed
// SHOWCASE ON CODEPEN - https://codepen.io/yury-kurylovich/pen/gOWeWXL?editors=1010

const predicates = {
  eq: (value) => (el) => String(el) === String(value),
  gte: (value) => (el) => (el) >= Number(value),
  lte: (value) => (el) => (el) <= Number(value),
}

const filterItems = (query, items) => {
  const fields = Object.keys(query);
  const activeFields = fields.filter((field) => query[field]);
  const result = activeFields.reduce((acc, field) => {
    const [name, predicateName] = field.split('_');
    const match = predicates[predicateName];
    return acc.filter(item => match(query[field])(item[name]));
  }, items)
  return result;
}

const render = (state) => {
  const resultElement = document.querySelector('.result')
  const filteredNotebooks = filterItems(state.filter, notebooks);
  if (filteredNotebooks.length = 0) {
    resultElement.innerHTML = '';
    return;
  }
  const html = `<ul>${filteredNotebooks.map((n) => `<li>${n.model}</li>`).join('')}</ul>`;
  resultElement.innerHTML = html;
}

const app = () => {
  const state = {
    filter: {
      processor_eq: null,
      memory_eq: null,
      frequency_gte: null,
      frequency_lte: null,
    },
  };

  const items = [
    { name: 'processor_eq', eventType: 'change' },
    { name: 'memory_eq', eventType: 'change' },
    { name: 'frequency_gte', eventType: 'input' },
    { name: 'frequency_lte', eventType: 'input' },
  ];

  items.forEach(({ name, eventType }) => {
    const element = document.querySelector(`[name="${name}"]`);
    element.addEventListener(eventType, ({ target }) => {
      state.filter[target.name] = target.value === ''
        ? null
        : target.value;
      render(state);
    });
  });

  render(state);
}

app();












/* полезные топики */
// https://ru.hexlet.io/topics/34708

// Важный момент состоит в том, что render принимает аргументом только состояние,
// поэтому передавать в него результат AJAX-разпроса нельзя.

// https://ru.hexlet.io/topics/27684
