//Write a program that takes two numbers and an operator (+, -, *, /) as input. 
//Perform the corresponding arithmetic operation and display the result.


const prompt =require("prompt-sync")();

const X =parseInt(prompt("Enter Input Number:"));

const Y =parseInt(prompt("Enter Input Number:"));

const operator =prompt("Enter a operator:");

if(operator== '+'){
    console.log(X + Y)
}
else if(operator=='-'){
    console.log(X - Y)
}
else if(operator =='*'){
    console.log(X * Y)
}
else if(operator =='/'){
    console.log(X / Y)
}

else{
    console.log("Invalid Operator")
}
    
