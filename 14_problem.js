const prompt =require("prompt-sync")();

const A =prompt("Enter the length side of A:");

const B =prompt("Enter the length side of B:");

const C =prompt("Enter the length side of C:");

if(A==B==C){
    console.log("Equilateral")
}
else if(A==B||B==C||A==C){
    console.log("Isococeles")
}
else{
    console.log("scalene")
}