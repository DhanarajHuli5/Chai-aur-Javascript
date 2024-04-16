// function add(num1) {
//     return num1;
// }

// console.log(add(2,3,4));

// function add2(...num1) {
//     return num1
// }
// console.log(add2(1,2,3));


function add3(val1,val2,...num1) {
    return  num1
}
// console.log(add3(1,2,3,4,5)); // [3,4]



//      -- Handle objects in function   --  //
const user = {
    username: "hitesh",
    price:1909
}

function handleObject(getObj){
    console.log(`Username is ${getObj.username} and price is ${getObj.price}`);
}
handleObject(user)


const myNewArray = [200,400,100,600]
function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));
