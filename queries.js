const User = require("./models").user;
const TodoItem = require("./models").todoItem;

// Searches for all users and logs them.
async function getUsers() {
  const allUsers = await User.findAll();
  return allUsers.map((user) => user.get({ plain: true }));
}

// getUsers().then((users) => console.log(users));

// Searches for all TodoItems and logs them (use plain: true).
async function getTodoItems() {
  const allTodoItems = await TodoItem.findAll();
  return allTodoItems.map((item) => item.get({ plain: true }));
}

// getTodoItems().then((result) => console.log(result));

// Searches for a user by primary key.
Searches for all TodoItems and logs them (use plain: true).
async function getUserByPk(key) {
  const user = await User.findByPk(key);
  return user ? user.get({ plain: true }) : "Not found!";
}

// getUserByPk(12).then((result) => console.log(result));


// Creates a new user. 
async function newUser({ name, email, phone }) {
  const newUser = await User.create({ name, email, phone });
  return newUser.get({ plain: true });
}

// newUser({
//   name: "rein",
//   email: "rein@codaisseur.com",
//   phone: 4232,
// }).then((result) => console.log(result));

// Searches only for important TodoItems
async function importantTodos() {
  const todos = await TodoItem.findAll({ where: { important: true } });
  return todos.map((todo) => todo.get({ plain: true }));
}

// importantTodos().then((result) => console.log(result));
