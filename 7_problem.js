const prompt =require("prompt-sync")();

const month =prompt("Enter the Month:");

if(year % 4==0){
    console.log("leap year")
}else{
    console.log("Not a leap year")
}
