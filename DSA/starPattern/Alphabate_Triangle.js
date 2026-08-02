let prompt=require("prompt-sync")()
let n=Number(prompt("Enter A Number:- "))


for(let i=0;i<=n;i++){
    for(let j=0;j<=i;j++){
        let ascii=n.charCodeAt(j)
        process.stdout.write(ascii+" ")
    }
    console.log();
    
}


