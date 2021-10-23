import Node from "./Node.js";

const reverse = (list) => {
  let reversedList = null;
  let current = list;

  while (current) {
    reversedList = new Node(current.getValue(), reversedList);
    current = current.getNext();
  }

  return reversedList;
}

// export default (list) => {
//   const iter = (node, acc) => (node === null
//     ? acc
//     : iter(node.getNext(), new Node(node.getValue(), acc)));
//
//   return iter(list, null);
// };

// const reverse = (list) => {
//   const iter = (node, acc) => {
//     if (node === null) {
//       return acc;
//     }
//     const value = node.getValue();
//     const next = node.getNext();

//     return iter(next, new Node(value, acc));
//   };
//   return iter(list, null);
// };



const numbers = new Node(1, new Node(2, new Node(3))); // (1, 2, 3)
console.log(numbers);
const reversedNumbers = reverse(numbers); // (3, 2, 1)
console.log(reversedNumbers);
