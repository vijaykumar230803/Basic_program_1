const prompt = require("prompt-sync")();

const N = parseInt(prompt("Enter Input NO:"))

let output = ""

let B ="*"

for (let i = N; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {

    output =output+ B + "  "
  }
  output = output+"\n"
}

console.log(output);