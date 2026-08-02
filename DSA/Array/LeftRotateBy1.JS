let arr=[1,2,3,4,5,6]

let first=arr[0]

for(let i=0;i<arr.length-1;i++){
    arr[i]=arr[i+1]
}
arr[arr.length-1]=first

console.log(arr);
