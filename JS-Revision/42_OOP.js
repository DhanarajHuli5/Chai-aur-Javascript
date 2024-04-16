// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;
    
// }

// const userOne = User("hitesh",4,true)
// const userTwo = User("Cahi",3,false)
// console.log(userOne);

// above code doesn't work coze 'userTwo' will overwrite 'userOne' -> use 'new' keyword.

// new keyword ->
// step 1 -> new object created
// step 2 -> constructor function created . - takes all the parameters and gives
// step 3 -> all the arguments are injected in 'this' 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function (){
        return `welcome ${this.username}`
    }
}

const userOne = new User ("hitesh",4,true)
console.log(userOne.greeting());
console.log(userOne.constructor);
console.log(userOne.constructor instanceof Object);








// const userTwo = new User("Cahi",3,false)