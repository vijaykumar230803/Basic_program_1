const prompt =require("prompt-sync")();

const Age =prompt("Enter a Age:");

if(Age <= 3){
    console.log("Free")
}
else if(Age <= 12){
    console.log("Ticket Price:5")
}
else if(Age <= 59){
    console.log("Ticket Price:10")
}
else{
    console.log("Ticket price:7")
}