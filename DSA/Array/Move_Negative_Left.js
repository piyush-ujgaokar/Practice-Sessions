let arr=[-1,-2,-3,4,5,-6,7]
let n=arr.length-1
let i=0
let j=n

while(i<j){
    if(arr[i] <= 0 && arr[j]>=0){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp

        i++
        j--
    }
}

console.log(arr);
