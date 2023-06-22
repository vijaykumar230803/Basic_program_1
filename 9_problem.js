const prompt =require("prompt-sync")();

const heigth =prompt("Enter your Heigth:");

const Weigth =prompt("Enter Your Weigth:");

const BMI = Weigth / (heigth * 2)

if(BMI < 18.5){
    console.log("Under Weigth")
}
else if(18.5 <= BMI < 25){
    console.log("Normal Weigth")
}
else if(25 <= BMI < 30){
    console.log("Over weigth")
}
else{
    console.log("Obese")
}