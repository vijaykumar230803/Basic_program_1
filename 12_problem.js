const prompt =require("prompt-sync")();

const celsius =prompt("Enter temperature in celsis:");

let fahrenheit = (celsius * 9/5) + 32

console.log(fahrenheit)

if(fahrenheit > 100){

    console.log("It's too hot")
}