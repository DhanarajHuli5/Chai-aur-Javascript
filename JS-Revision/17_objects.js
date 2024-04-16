const tinderUser = new Object()
// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"hitesh",
            lastName:"choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastName);

//  --  Merging objects --  //
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


//  --  Array of Objects    --  //      


const users =[
    {
        id:1,
        email:"h@gmail0.com"
    },
    {
        id:2,
        email:"h@gmail1.com"
    },
    {
        id:3,
        email:"h@gmail2.com"
    }
]
// console.log(users[0]);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));