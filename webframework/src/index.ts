import { User } from "./models/User";

// const userCollection = User.buildUserCollection();

// userCollection.on('change', () => {
//   console.log(userCollection.models);
// });

// userCollection.fetch();

import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "Bob", age: 54 });
const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}
const userForm = new UserForm(root, user);
userForm.render();
