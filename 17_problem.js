const prompt =require("prompt-sync")();

const Mark =prompt("Enter the Mark:");

if(Mark >=90){
    console.log("Grade:A")
}
else if(Mark >= 80){
    console.log("Grade:B")
}
else if(Mark >= 70){
    console.log("Grade:C")
}
else if(Mark >= 60){
    console.log("Grade:D")
}
else{
    console.log("Grade:F")
}