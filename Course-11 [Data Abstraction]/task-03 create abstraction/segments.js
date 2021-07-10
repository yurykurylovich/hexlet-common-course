const makeDecartPoint = (x, y) => ({ x, y });
const getX = (point) => point.x;
const getY = (point) => point.y;
const average = (a, b) => (a + b)/2;

const makeSegment = (beginPoint, endPoint) => ({ beginPoint, endPoint });
const getBeginPoint = (segment) => segment.beginPoint;
const getEndPoint = (segment) => segment.endPoint;
const getMidpointOfSegment = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);
  const x = average(getX(beginPoint), getX(endPoint))
  const y = average(getY(beginPoint), getY(endPoint))
  return makeDecartPoint(x, y);
}

/* testing */
const beginPoint = makeDecartPoint(19, 1);
const endPoint = makeDecartPoint(-3, 9);
const segment = makeSegment(beginPoint, endPoint);
console.log(segment)
console.log(getMidpointOfSegment(segment)); // (8, 5)
console.log(getBeginPoint(segment)); // (19, 1)
console.log(getEndPoint(segment)); // (-3, 9)
