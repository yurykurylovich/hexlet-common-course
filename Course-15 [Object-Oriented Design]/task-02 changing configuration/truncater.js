/* truncate()
truncate() function or method is usually used to shirnk some long text and add a separator at the end of it:
truncate('long text', { length: 3 }); // lon...
Write Truncator class with constructor and truncate() method.
Method takes a string and some options:
- separator: symbol that is used at the end of the string
- length - max length of the string
Default options are preset using static options, BUT: it can be re-written at any step of class use: when class is first created and when method is used.
Mind how and where the options are changing and which values (default, constructor's or method's should be used at every time).
*/

class Truncater {
  static defaultOptions = {
    separator: "...",
    length: 100,
  }
  // Take default arguments and rewrite if there're argumented in constructor
  constructor(args = {}) {
    this.args = { ...Truncater.defaultOptions, ...args }
  }
  // Take default + constructor arguments and rewrite if there're argumented in the method
  truncate(text, args = {}) {
    let argums = { ...this.args, ...args };
    this.length = argums.length;
    this.separator = argums.separator;
    return text.length < this.length
      ? text
      : `${text.substring(0, this.length)}${this.separator}`;
  }
}

const truncater = new Truncater({separator: '.....', length: 10})
const phrase = 'Truncater class testing'
console.log(truncater.truncate(phrase))
const text = 'Lorem Ipsum is simply dummy text of the printing and lorem typesetting industry'
const truncater2 = new Truncater({ length: 3 });
console.log(truncater2.truncate(text)); // 'one...'
console.log(truncater2.truncate(text, { separator: "!" })); // 'one!'
console.log(truncater2.truncate(text)); // 'one...'
console.log(truncater2.truncate(text, { length: 7 })); // 'one two'

const truncater3 = new Truncater({ separator: "__" });
console.log(truncater3.truncate(text)); // 'one two'
console.log(truncater3.truncate(text, { length: 3 })); // 'one__'
console.log(truncater3.truncate(text, { length: 5, separator: "" })); // 'one t'
console.log(truncater3.truncate(text)); // 'one two'
