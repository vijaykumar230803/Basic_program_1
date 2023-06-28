const prompt = require("prompt-sync")();

const N = prompt("Enter Input Name: ");

let output = "";

for (let i = 1; i <= N; i ++) {
  
    for (let j = 1; j <= i; j ++) {
    
        output = output+i+ "  ";
  }
  
  output =output+ "\n";
}

console.log(output);