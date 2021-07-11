////// PREBUILT FUNCTIONS:
const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

const getX = (point) => point.x;
const getY = (point) => point.y;

const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

////// TASK FUNCTIONS
const makeRectangle = (p, width, height) => ({ p, width, height });

const getStartPoint = (rectangle) => rectangle.p;
const getWidth = (rectangle) => rectangle.width;
const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
  const pointUpLeft = getStartPoint(rectangle);
  const pointDownRight = makeDecartPoint(
    getX(pointUpLeft) + getWidth(rectangle),
    getY(pointUpLeft) - getHeight(rectangle)
  );
  return getQuadrant(pointUpLeft) === 2 && getQuadrant(pointDownRight) === 4;
};

const rectangle = makeRectangle({x: -3, y: 8}, 6, 10)
console.log(containsOrigin(rectangle))
