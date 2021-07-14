/* Cart.js
Write and export by default Cart class that is a cart of online store.
Interface:
--- addItem(item, count) – adds items to cart. Item looks like this: {item: { name: 'car', price: 3 }, count: 5}
--- getItems – returns items: [{ item, count }, { item, count }, ...]
--- getCost – returns full cart cost. Mind the price and the amount of items.
--- getCount – returns the full amount of items in the cart.
*/

class Cart {
  constructor() {
    this.items = [];
  };

  addItem(item, count) {
    this.items = [...this.items, {item: item, count: count}]
  };

  getItems() {
    return this.items;
  };

  getCost() {
    return this.items.reduce((acc, item) => (
      acc += item.item.price * item.count
    ), 0)
  }

  getCount() {
    return this.items.reduce((acc, item) => (
      acc += item.count
    ), 0)
  }
}

const items = new Cart()
console.log(items.getItems())
items.addItem({name: 'car', price: 3}, 5)
console.log(items.getItems())
items.addItem({name: 'bus', price: 4}, 15)
console.log(items.getItems())
console.log(items.getCount())
console.log(items.getCost())


