const prompt = require("prompt-sync")();

const N = parseInt(prompt("Enter Input NO:"));

let output = ""


for (let i = 1; i <= N; i+=1) {
  for (let j = 1; j <= i; j+=1) {
    output =output+ "*" + "   "
  }
  output += "\n"
}

for (let i = N - 1; i >= 1; i-=1) {
  for (let j = 1; j <= i; j+=1) {
    output =output+ "*   "
  }
  output += "\n"
}

console.log(output)






