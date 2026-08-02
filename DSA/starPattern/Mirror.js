let n = 7;

for (let i = 1; i <= n; i++) {
    let pattern = "";

    for (let j = 1; j <= n-i; j++) {
        pattern+="  "
    }
    for (let j = 1; j <=i; j++) {
        pattern += "* ";
    }
    

    console.log(pattern);   
}