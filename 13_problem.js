const prompt =require("prompt-sync")();

const price =prompt("Enter the price Amount:");

if (price > 100){
    console.log(10)
}
else if(price > 50 && price <= 100){
    console.log(5)
}
else{
    console.log(0)
}