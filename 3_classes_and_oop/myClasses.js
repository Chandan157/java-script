class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const boss=new User("Chandan","chandan@123","123")

console.log(boss);
console.log(boss.encryptPassword());
console.log(boss.changeUsername());