const prompt =require("prompt-sync")();

const No =prompt("Enter Input Number:");

if(No==1){
    console.log("Monday")
}
else if(No==2){
    console.log("Tuesday")
}
else if(No==3){
    console.log("Wednesday")
}
else if(No==4){
    console.log("Thursday")
}
else if(No==5){
    console.log("Friday")
}
else if(No==6){
    console.log("Satursday")
}
else if(No==7){
    console.log("Sunday")
}
else{
    console.log("Invalid Input Number")
}