const make = (numer, denom) => ({
  numer: numer,
  denom: denom,
  getNumer() {
    return this.numer
  },
  getDenom() {
    return this.denom
  },
  toString() {
    return `${this.numer}/${this.denom}`
  },
  add: function add(rat) {
    let a = this.getNumer() * rat.getDenom() + this.getDenom() * rat.getNumer();
    let b = this.getDenom() * rat.getDenom();
    return make(a, b);
  },
})


const firstNum = make(1, 4)
console.log(firstNum)
console.log(firstNum.toString());
const secondNum = make(13, 16)
console.log(secondNum)
console.log(secondNum.toString());

console.log(firstNum.add(secondNum).toString())
