// ES6
// classes are syntactical sugar. Behind the scenes new keyword  is used to create a class object. 
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    enctyptPassword(){
        return `Encrypted ${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new  User("Chai", "chai@gmail.com","123");
console.log(chai.enctyptPassword());
console.log(chai.changeUsername());

// same code without  using class syntax
function UserFn(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
UserFn.prototype.encryptPassword = function () {
   return `Encrypted ${this.password}xyz`
};

UserFn.prototype.changeUsername = function () {
   return this.username.toLowerCase();
};
const tea = new  UserFn('Tea', 'tea@gmail.com','456');
console.log(tea.encryptPassword())
console.log(tea.changeUsername())

// 'prototype' keyword  =>
// In JavaScript, the prototype property is used to define methods and properties that should be shared by all instances of an object. In this case, the code is defining a method called encryptPassword that can be called on any instance of the User object. 




