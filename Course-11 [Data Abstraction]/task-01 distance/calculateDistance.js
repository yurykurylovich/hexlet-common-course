const calculateDistance = (p1, p2) => {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
}

const result = calculateDistance([2, 4], [5, 8]);
console.log(result)
