let units=200
let amount=0
if(units<100){
    amount=units*4.2
}else if(units<=200){
    amount=(100*4.2)+((units-200)*6)
}else if(units<=400){
    amount=(100*4.2)+(100*6)+((units-200)*8)
}else{
    amount=(100*4.2)+(100*6)+(200*8)+((units-400)*13)
}

console.log("Total Bill:- ",amount);
