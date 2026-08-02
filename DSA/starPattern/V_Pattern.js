let prompt=require("prompt-sync")()
let n=Number(prompt("Enter A Number:- "))

for(let i=0;i<n;i++){
    for(let j=0;j<=2*n-1;j++){
        if(i==j || j==2*n-2-i) process.stdout.write("* ")
        else process.stdout.write(" ")
    }
    console.log();
    
}