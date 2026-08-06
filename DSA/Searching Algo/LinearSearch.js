let prompt=require("prompt-sync")()
let target=Number(prompt("Enter Target:- "))
let index=-1


let arr=[12,33,54,63,78,98,92]

for(let i=0;i<=arr.length;i++){
    if(arr[i] == target){
        index=i
        break
    }
}

console.log(index==-1 ?"Not Found" : "Element Fount At "+index+" Index");
