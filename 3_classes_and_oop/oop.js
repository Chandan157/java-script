//object literal
const user = {
  username: "Chandan",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Get user Dtails from database");
    console.log(`username:${this.username}`);
  },
};

console.log(user.username);
console.log(user.getUserDetails());

//constructor function - ek he object se hum bohot sara instance bana sakte hai
// const promiseOne = new promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}
const userOne = new User("Chandan", 12, true);
const userTwo = new User("Rajesh", 18, false);
console.log(userOne);
console.log(userTwo);
