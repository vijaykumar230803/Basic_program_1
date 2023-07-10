const prompt = require("prompt-sync")();

const N = parseInt(prompt("Enter Input NO:"))

let output = ""


for (let i = 1; i <= N; i+=1) {
  for (let j = 1; j <= i; j+=1) {
    output =output+ i + "   ";
  }
  for (let j = 1; j <= 2*(N - i); j+=1) {
    output =output+ "    "
  }
  for (let j = i; j >= 1; j-=1) {
    output =output+ j + "   "
  }
  output += "\n"
}

console.log(output)


