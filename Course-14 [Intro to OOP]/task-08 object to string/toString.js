/* toString.js
Realize toString() method for two preset constructors:
--- Point.toString() - should return a string in the format of (1, 10)
--- Segment.toString() - should return a string in the format of [(1, 10), (11, -3)]
*/
////// PRESET POINT CONSTRUCTOR
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function getX() {
  return this.x;
};

Point.prototype.getY = function getY() {
  return this.y;
};

Point.prototype.toString = function toString() {
  return `(${this.getX()}, ${this.getY()})`
}

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function getBeginPoint() {
  return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint() {
  return this.endPoint;
};

Segment.prototype.toString = function toString() {
  return `[${this.getBeginPoint().toString()}, ${this.getEndPoint().toString()}]`
}

///// TESTS
const point = new Point(1, 10)
console.log(point.toString()) // (1, 10)

const segment = new Segment(point, new Point(4, 5))
console.log(segment.toString()) // [(1, 10), (4, 5)]
