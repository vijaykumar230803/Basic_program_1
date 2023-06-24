const prompt =require("prompt-sync")();

const Billamount =prompt ("Enter a Total Bill Amount:");

const No =prompt ("Enter a number of people:");

let tipamount =Billamount *0.10

let totalbill =Billamount +tipamount

let person =totalbill /No

console.log(person)