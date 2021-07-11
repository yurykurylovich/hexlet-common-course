const makeDecartPoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt(x ** 2 + y ** 2),
  };
  return point;
};

const getX = (point) => {
  const x = Math.round(point.radius * Math.cos(point.angle));
  return x;
}

const getY = (point) => {
  const y = Math.round(point.radius * Math.sin(point.angle));
  return y;
}

const point = makeDecartPoint(2, 6);
const x = getX(point);
const y = getY(point);
console.log(point, x, y)
