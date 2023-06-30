const prompt = require("prompt-sync")();

const N = parseInt(prompt("Enter Input NO:"));

let output = ""

for (let i = 1; i <= N; i+=1) {
  
    for (let j = 1; j <= i; j+=1) {
   
        if ((i + j)% 2==0) {
          output =output+ "1   "
    } else {
       output =output+ "0   "
    }
  }
  output += "\n"
}

console.log(output)