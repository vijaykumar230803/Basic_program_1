const prompt = require("prompt-sync")();

const month = parseInt(prompt("Enter the Month:"));

const year = parseInt(prompt("Enter the Year:"));

if ((year %4==0 &&year % 100!==0)||year% 400==0) {

  if (month ==2) {
    console.log(29)
  }
   else if (month==4||month==6|| month== 9||month== 11) 
   {
    console.log(30)
  }
   else {
    
    console.log(31)
  }
} else {
  
  if (month ==2) {
   
    console.log(28)
  } 
  else if (month ==4||month==6||month==9||month== 11) {
    console.log(30)
  } 
  else {
    console.log(31)
  }
}
