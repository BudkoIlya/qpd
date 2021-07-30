class User {
  sayHi() {
    console.log(`Hello`);
  }
}
class User2 {
  sayBye() {
    console.log(`Bye`);
  }
}

extend(User, User2);

function extend(firstClass, secondClass) {
  Object.setPrototypeOf(secondClass.prototype, firstClass.prototype);
}
const user = new User("user1");
const user2 = new User2("user2");
user.sayHi();
user2.sayHi();
user2.sayBye();
