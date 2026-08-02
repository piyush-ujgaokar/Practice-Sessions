
let prompt=require('prompt-sync')()

let s1=Number(prompt("Enter s1:- "))
let s2=Number(prompt("Enter s2 :- "))
let s3=Number(prompt("Enter s3:- "))

let s=(s1+s2+s3)/2

let Area=Math.sqrt(s*(s-s1)*(s-s2)*(s-s3))

console.log(Area);
