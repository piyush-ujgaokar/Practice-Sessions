let prompt=require("prompt-sync")()


let n=Number(prompt("Enter A Number:- "))

for(let i=0;i<=n;i++){
    for(let j=0;j<=n;j++){
        process.stdout.write("* ");
    }
    console.log();
    
}