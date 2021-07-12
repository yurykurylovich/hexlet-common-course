
///// INCAPSULATED METHODS:
let makeUser = ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends;
  },
});

///// SOLUTION
const getMutualFriends = (user1, user2) => {
  const friends1 = user1.getFriends();
  const friends2 = user2.getFriends();
  const friends1Ids = friends1.map(friend => friend.id)
  return friends2.filter((friendOfSecond) => friends1Ids.includes(friendOfSecond.id))
}

///// TESTS
const user1 = makeUser();
const user2 = makeUser();
// console.log(getMutualFriends(user1, user2)); // []

const friends = [
  makeUser({ id: 2 }),
  makeUser({ id: 8 }),
  makeUser({ id: 7 }),
  makeUser({ id: 100 }),
];
const user3 = makeUser({
  friends: friends.filter(({ id }) => id !== 7),
});
console.log(user3)
const user4 = makeUser({
  friends: friends.filter(({ id }) => id !== 100),
});
console.log(user4)
const mutualFriends = getMutualFriends(user3, user4);

console.log(mutualFriends);
