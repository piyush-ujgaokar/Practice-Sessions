let prompt=require("prompt-sync")()
let n=Number(prompt("Enter A Number:- "))


for(let i=0;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(j+" ")
    }
    console.log();
    
}

