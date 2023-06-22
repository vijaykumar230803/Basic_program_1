const prompt =require("prompt-sync")();

const No =prompt("Enter Input Number:");

if(No % 2==0){
    console.log("Even Number")
}
else{
    console.log("odd Number")
}