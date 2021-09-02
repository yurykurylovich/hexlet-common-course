import FakeSubscription from './FakeSubscription.js';
import Subscription from "./Subscription.js";
import User from "./User.js";


const user1 = new User('vasya@email.com', new Subscription('premium'))
console.log(user1.getCurrentSubscription().hasPremiumAccess())  // true
console.log(user1.getCurrentSubscription().hasProfessionalAccess())  // false

const user2 = new User('vasya@email.com', new Subscription('professional'));
console.log(user2.getCurrentSubscription().hasPremiumAccess()); // false
console.log(user2.getCurrentSubscription().hasProfessionalAccess()); // true

// Внутри создается фейковая, потому что подписка не передается
const user3 = new User('vasya@email.com');
console.log(user3.getCurrentSubscription().hasPremiumAccess()); // false
console.log(user3.getCurrentSubscription().hasProfessionalAccess()); // false

const user4 = new User('rakhim@hexlet.io'); // администратор, проверяется по емейлу
console.log(user4.getCurrentSubscription().hasPremiumAccess()); // true
console.log(user4.getCurrentSubscription().hasProfessionalAccess()); // true
