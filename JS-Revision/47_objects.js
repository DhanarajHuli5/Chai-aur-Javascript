// const dscptr = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(dscptr);

const chai = {
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderChai:function () {
        console.log("chai ordered");
    }
}



console.log(chai);


console.log(Object.getOwnPropertyDescriptor(chai, "name"));



Object.defineProperty(chai, "name",{
    writable : false,  //Making the property non-writable
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));




for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}



// notes
// we can change properties of objects  using .getOwnPropertyDescriptor()
// making the enumerable:false 