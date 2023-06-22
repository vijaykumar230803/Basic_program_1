const prompt =require("prompt-sync")();

const X =prompt("Enter a vaule of X :");

const Y =prompt("Enter a vaule of Y:");

const Z =prompt("Enter a vaule of Z:");



if(X >= Y && X >=Z){
    console.log(X)
}
else if(Z > X && Y >= Z){
    console.log(Y)
}
else{
    console.log(Z)
}