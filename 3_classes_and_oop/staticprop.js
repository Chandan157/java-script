class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const chandan =new User("Chandan")
// console.log(chandan.createId())     //static hai is liye nahi print ho raha

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}

const iphone= new Teacher("iphone","i@phone.com")
console.log(iphone);
iphone.logMe();
console.log(iphone.createId());
