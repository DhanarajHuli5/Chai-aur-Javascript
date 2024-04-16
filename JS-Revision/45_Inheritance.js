class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const techUser = new Teacher("Hitesh","hitesh@gmail.com",12345)
const normalUser = new  User("John","john@gmail.com", 67890)

techUser.logMe()
console.log(techUser instanceof User);