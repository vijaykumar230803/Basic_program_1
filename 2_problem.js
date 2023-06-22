const prompt =require("prompt-sync")();

const No =prompt("Enter Input Number:");

if(0 < No){
    console.log("Positive")
} 
else if(0 > No){
    console.log("Negative")
}
else{
   console.log("Zero")
}