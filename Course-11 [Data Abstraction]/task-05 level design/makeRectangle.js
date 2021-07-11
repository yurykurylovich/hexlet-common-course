import {
  makeDecartPoint,
  getX,
  getY,
  getQuadrant,
} from './helpers.js';

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
