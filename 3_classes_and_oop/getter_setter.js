//agar hum getter define kiye to setter bhe define karna parega

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email=value;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

const chandan = new User("chandan@gmail.com", "ABC");
console.log(chandan.password);
console.log(chandan.email);
