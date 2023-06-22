const prompt =require("prompt-sync")();

const Age =prompt("Enter Age:")

if(Age > 18){
    console.log("Eligible to Vote")
}
else{
    console.log("Not Eligible")
}

