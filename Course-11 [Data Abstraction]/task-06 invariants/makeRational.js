const greatestDivisor = (a, b) => {
  if (!b) return a;
  return Math.abs(greatestDivisor(b, a % b));
};

const makeRational = (a, b) => {
  const grDvr = greatestDivisor(a, b)
  return { numer: a/grDvr, denom: b/grDvr }
}

const getNumer = (rational) => rational.numer;
const getDenom = (rational) => rational.denom;

const add = (rat1, rat2) => {
  const numer1 = getNumer(rat1);
  const numer2 = getNumer(rat2);
  const denom1 = getDenom(rat1);
  const denom2 = getDenom(rat2);
  let denom = denom1 * denom2;
  let numer = numer1 * denom2 + numer2 * denom1;
  return makeRational(numer, denom);
};

const sub = (rat1, rat2) => {
  const numer1 = getNumer(rat1);
  const numer2 = getNumer(rat2);
  const denom1 = getDenom(rat1);
  const denom2 = getDenom(rat2);
  let denom = denom1 * denom2;
  let numer = numer1 * denom2 - numer2 * denom1;
  return makeRational(numer, denom);
};

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;


/////// TESTS
const rat1 = makeRational(12, 48);
console.log(getNumer(rat1)); // 1
console.log(getDenom(rat1)); // 4

const rat2 = makeRational(10, 3);
console.log(add(rat1, rat2)); // makeRational(43, 12))
console.log(sub(rat1, rat2)); // makeRational(-37, 12))

const rat3 = makeRational(-4, 16);
console.log(getNumer(rat3)); // -1
console.log(getDenom(rat3)); // 4

console.log(ratToString(rat1)); // '1/3'
console.log(ratToString(rat3)); // '-1/4'
