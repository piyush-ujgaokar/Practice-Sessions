let arr=[1,2,3,4,5,5,7]

let target=12
let count=0

for(let i=0;i<arr.length;i++){
    let sum=0
    for(let j=i;j<arr.length;j++){
        sum+=arr[j]
        if(sum==target){
            count++
        }
    }
}

console.log(count);
