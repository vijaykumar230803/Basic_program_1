const prompt =require("prompt-sync")();

const year =prompt ("Enter a Year:");

if(year % 4==0 && year % 100!=0 || year % 400==0){

    console.log("leap year")
}
else{
    console.log("Not a Leap year")
}