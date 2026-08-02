let prompt = require("prompt-sync")();

let num = Number(prompt("Enter Number:- "));

let copy=num
let ans=0

while (num > 0) {
    let fact = 1;
    let digits = num % 10;

  for (let i = 1; i <= digits; i++) {
    fact *= i;
  }
  ans+=fact

  num=Math.floor(num/10)
  
}

if(ans==copy) console.log("Strong");
else console.log("Not Strong");


