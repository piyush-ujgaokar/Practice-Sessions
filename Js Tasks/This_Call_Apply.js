// function greet(message1,message2){
//     console.log(`Hello this is greet Function ${this.name} ${message1} ${message2}`);
    
// }
function greet(message1,message2){
    console.log(`Hello this is greet Function ${this.name} ${message1} ${message2}`);
    
}


let obj1={
    name:"Piyush",
    age:20,
    gender:"Male",
    Married:"Yes/no",
}
let obj2={
    name:"Ayush",
    age:13,
    gender:"Female",
    Married:"Yes"
}


// greet.call(obj1,"MEssage1","Message2")
greet.apply(obj2,["MEssage1","Message2"])

console.log(obj2);
