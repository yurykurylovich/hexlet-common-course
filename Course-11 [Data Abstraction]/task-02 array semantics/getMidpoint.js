const getMidpoint = (p1, p2) => {
  const formula = (pt1, pt2) => (pt1 + pt2)/2;
  const x = formula(p1.x, p2.x)
  const y = formula(p1.y, p2.y)
  return { x, y }
}


/////// TESTS
const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
console.log(getMidpoint(point1, point2)); // { x: 2, y: 2 }
