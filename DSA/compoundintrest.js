
let prompt=require('prompt-sync')()

let Principle=Number(prompt("Enter Principle:- "))
let rate=Number(prompt("Enter rate :- "))
let time=Number(prompt("Enter time:- "))

let amount=Principle*Math.pow((1+rate/100),time)

console.log(amount);

