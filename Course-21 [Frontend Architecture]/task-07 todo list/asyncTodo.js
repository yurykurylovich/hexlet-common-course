/* asyncTodo.js
Realize interface for the todo-app with two features: adding and POST-ing new todo-tasks to backend and updating viewed todo-list accordingly with the backend information (GET).
*/

///// WORKING DEMO ON CODEPEN (without backend exchange) - https://codepen.io/yury-kurylovich/pen/gOWBYPj
import axios from "axios";

const todos = {
  items: [
    {name: "Clean kitchen"},
    {name: "Feed dog"},
  ],
};

const state = {
  tasks: [],
}

const getTasks = () => {
  // Async get response:
  // axios.get(routes.tasksPath()).then((response) => {
  //   state.tasks = response.data.items;
  // });

  // Functionality without backend:
  const response = todos;
  state.tasks = response.items;
  renderTasks();
}

const renderTasks = () => {
  const tasks = document.querySelector(".tasks");
  const list = state.tasks;
  if (list) {
    const htmlList = list
      .map((item) => `<div class="p-2">${item.name}</div>`)
      .join("")
    tasks.innerHTML = htmlList;
  }
}

// Async page generation when there're asyncronous backend requests:
//await getTasks();

// Change for the functionality without backend:
getTasks();

const tasksForm = document.querySelector(".form-inline");
tasksForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = formData.get("name");
  const newTask = { name: data };
  if (data) {
    // Async post request:
    //axios.post(routes.tasksPath(), data).then(getTasks()).catch();

    // Functionality without backend:
    state.tasks.push(newTask);
    getTasks();
    tasksForm.reset();
  }
})


// const tasks = document.querySelector(".tasks");
// const tasksForm = document.querySelector(".form-inline");
// const state = {
//   tasks: [],
// };
// const getTasks = () => {
//   axios.get(routes.tasksPath()).then((response) => {
//     state.tasks = response.data.items;
//     renderTasks();
//   });
// };
//
// const renderTasks = () => {
//   let list = state.tasks;
//   if (list) {
//     let htmlList = list
//       .map((item) => `<div class="p-2">${item.name}</div>`)
//       .join("");
//     tasks.innerHTML = htmlList;
//   }
// };
// const run = async () => {
//   await getTasks();
//
//   tasksForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const task = formData.get("name");
//     let data = { name: task };
//     if (task) {
//       axios.post(routes.tasksPath(), data).then(getTasks()).catch();
//     }
//   });
// };
