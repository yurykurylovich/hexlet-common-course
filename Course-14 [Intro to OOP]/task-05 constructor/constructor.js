/*
Point.js
Реализуйте и экспортируйте по умолчанию функцию-конструктор Point с двумя свойствами x (длина) и y (высота).
Подсказки
Есть разные способы организовать работу абстракции Point. Выберите то, которое считаете нужным,
на основе пройденного материала.
Примеры
const point = new Point(1, 1);
Segment.js
Реализуйте и экспортируйте по умолчанию функцию-конструктор Segment с двумя свойствами beginPoint и
endPoint и геттеры для извлечения этих свойств: getBeginPoint и getEndPoint.
Примеры
const segment = new Segment(new Point(1, 1), new Point(10, 11));
solution.js
Реализуйте функцию reverse, которая принимает на вход отрезок и возвращает новый отрезок с точками,
добавленными в обратном порядке (begin меняется местами с end).
Примечания
Точки в результирующем отрезке должны быть копиями (по значению) соответствующих точек исходного массива.
То есть они не должны быть ссылкой на один и тот же объект, так как это
разные объекты (пускай и с одинаковыми координатами).
Примеры
const segment = new Segment(new Point(1, 10), new Point(11, -3));
const reversedSegment = reverse(segment);
const reversedSegment.getBeginPoint(); // (11, -3)
const reversedSegment.getEndPoint(); // (1, 10) */

function getX() {
  return this.x;
};
function getY() {
  return this.y;
};
function getBeginPoint() {
  return this.beginPoint;
};
function getEndPoint() {
  return this.endPoint;
};

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

const reverse = (segment) => {
  const beginPointX = segment.getBeginPoint().getX()
  const beginPointY = segment.getBeginPoint().getY()
  const endPointX = segment.getEndPoint().getX()
  const endPointY = segment.getEndPoint().getY()
  const newBeginPoint = new Point(endPointX, endPointY)
  const newEndPoint = new Point(beginPointX, beginPointY)
  return new Segment(newBeginPoint, newEndPoint);
}

const beginPoint = new Point(1, 3)
const endPoint = new Point(4, 8)
const segment = new Segment(beginPoint, endPoint)

console.log(reverse(segment).getBeginPoint().getX());
console.log(reverse(segment).getEndPoint().getY());

