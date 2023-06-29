const prompt = require("prompt-sync")();

const N = parseInt(prompt("Enter Input NO:"))

let output = ""

for (let i = 1; i <= N; i+=1) {
  for (let j = 1; j <= N - i; j+=1) {
    output =output+ "    "
  }
  for (let Z = i; Z >= 1; Z-= 1) {
    output =output+ Z + "   "
  }
  output += "\n"
}
console.log(output);