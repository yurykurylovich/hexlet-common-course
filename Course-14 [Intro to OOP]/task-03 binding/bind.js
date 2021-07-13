/* bind.js
Write and export by default a bind() function that works exactly like bind() method. You can use call() or apply() methods.
*/

const bind = (obj, fn) => (...args) => {
  fn.apply(obj, args)
}

// FULL VERSION
const bind = (obj, fn) => {
  // bind execute another function that collects all the arguments ...
  return (fn = (...args) => {
    //... which are applied in fn function with the context object.
    return fn.apply(obj, args);
  });
};
