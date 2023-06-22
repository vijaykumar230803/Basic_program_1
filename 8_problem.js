const prompt =require("prompt-sync")();

const hour =prompt("Enter a hour:");

const mint =prompt("Enter a minute:");


if( 0 <=hour <=23&& 0 <=mint <=59){

    console.log("Valid Time")
}
else{
    console.log("Invalid Time")
}