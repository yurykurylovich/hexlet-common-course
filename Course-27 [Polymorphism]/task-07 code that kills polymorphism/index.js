
import User from "./User.js";
import Guest from "./Guest.js";
import getGreeting from "./helpers.js";


const guest = new Guest();
console.log(getGreeting(guest)); // 'Nice to meet you Guest!'

const user = new User('Petr');
console.log(getGreeting(user)); // 'Hello Petr!'
