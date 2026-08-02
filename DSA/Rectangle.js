let prompt=require('prompt-sync')()

let length=prompt("Enter Length:- ")
let breadth=prompt("Enter readth :- ")

let area=length*breadth
let perimeter=2*(length+breadth)

console.log("Area:-",area);
console.log("Perimeter:-",perimeter);
