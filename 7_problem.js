const prompt =require("prompt-sync")();

const year = prompt("Enter Input Year:");

if(year % 4==0){
    console.log("leap year")
}else{
    console.log("Not a leap year")
}
