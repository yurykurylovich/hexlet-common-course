/* static.js
Time class takes a number of hours and minutes (h, m) and can return it as a string 'h:m"
Add to Time class static method fromString() that takes a string 'hours:minutes' and returns new Time object on the base of it. */

class Time {
  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }

  static fromString(time) {
    this.hours = time.split(":")[0]
    this.minutes = time.split(":")[1]
    return new Time(this.hours, this.minutes)
  }
}

///// TEST
const time = new Time(13, 45)
console.log(time.toString())
const anotherTime = Time.fromString('11:33')
console.log(`Test time is ${anotherTime}`)
