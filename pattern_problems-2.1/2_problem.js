const prompt = require("prompt-sync")();

const N = prompt("Enter Input Name: ");

let B ="*"

let output = "";

for (let i = 0; i < N; i ++) {
  
    for (let j = 0; j <= i; j ++) {
    
        output = output+B + "  ";
  }
  
  output =output+ "\n";
}

console.log(output);