function setUsername (username){
    this.username=username
}
function createUser(username,email,password){
    setUsername(username)
    this.email=email;
    this.password=password;

}

const chai = new createUser("chai","chai@fb.com","123")
console.log(char);

// why the above code doesn't work?
//when setUsername executes, it's execution  context is removed from stack. All the variables are also removed.
// the below code works

function setUsername (username){
    this.username=username
}
function createUser(username,email,password){
    setUsername.call(this,username)
    this.email=email;
    this.password=password;

}

const char = new createUser("chai","chai@fb.com","123")
console.log(char);

// the above code works because
// 'this' in the 'setUsername' referes to 'createUser' that allows proper assignment of username
// all the variables declared int the setUsername will declared in 'createUser' . so it doesn't matter if 'setUsername' is removed from stack.
