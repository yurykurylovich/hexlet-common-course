/* prettify
Реализуйте функцию prettify, которая находит текст (дочерние текстовые ноды) внутри элемента div и
оборачивает текст в параграф. Экспортируйте функцию по умолчанию.
// <body>
//   <p>Boom</p>
//   text
//   <div>Bam</div>
// </body>
const elements = prettify(document);
console.log(document.body.innerHTML);
// <body>
//   <p>Boom</p>
//   text
//   <div><p>Bam</p></div>
// </body>
Подсказки
Очистка строки от пробельных символов: trim */

const prettify = (doc) => {
  const divs = doc.getElementsByTagName('div');
  divs.forEach((div) => {
    const filtered = [...div.childNodes]
      .filter(child => child instanceof Text)
      .filter(child => child.textContent.trim() !== '');
    filtered.forEach(node => {
      const pEl = document.createElement('p');
      pEl.textContent = node.textContent;
      node.replaceWith(pEl);
    });
  });
};


