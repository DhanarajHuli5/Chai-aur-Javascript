const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello world!"
for (const greet of greeting) {
    if(greet == ' '){
        continue
    }
    // console.log(greet);
}

//      --  Maps  --    //
const map = new Map()
map.set('in',"India")
map.set('fr',"France")
console.log(map);

for (const [keys, value] of map) {
    console.log(keys,value);
}


// Loops on Objects --      //
const myOb = {
    'game1':"nfs",
    'game2':'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(); // cant use for oƒ on objects
// }

const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    ts:"typescript"
}

for (const key in myObject) {
    console.log(`${key} -> ${myObject[key]}`);
}
