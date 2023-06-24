const prompt =require("prompt-sync")();

const Hour =prompt ("Enter a hour of packing:");

if(Hour <=0){
    console.log(0)
}
else if(Hour <=1){
    console.log(2)
}
else if(Hour <=24){
    console.log(2+(Hour-1))
}
else{
    console.log(10)
}