const prompt =require("prompt-sync")();

const X =prompt("Enter the Vaule of X:");

const Y =prompt("Enter the value of Y:");


if(X > Y){
    console.log((X) +"larger than"+(Y) )}
else if(X < Y){
    console.log((Y) +" larger than"+(X))
}    

else{
    console.log("Both are equal")
}
