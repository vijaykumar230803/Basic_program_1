const prompt = require("prompt-sync")();

const name = prompt("Enter Input Name: ");

let output = "";

for (let i = 0; i < name.length; i ++) {
  
    for (let j = 0; j <= i; j ++) {
    
        output = output+name[j] + "  ";
  }
  
  output =output+ "\n";
}

console.log(output);