const prompt = require("prompt-sync")();

const N = parseInt(prompt("Enter Input NO:"))

let output = ""

for (let i = N; i >= 1; i -= 1) {
  
    for (let j = N; j > i; j -= 1) {
        output =output+ "   "
    }
    
    for (let X = 1; X <= 2*i-1; X += 1) {
        output =output+ '*' + "  "
    }
    
    output =output+ "\n"
}

for (let i = 2; i <= N; i += 1) {
  
    for (let j = N; j > i; j -= 1) {
        output =output+ "   "
    }
    
    for (let X = 1; X <= 2*i-1; X += 1) {
        output =output+ '*' + "  "
    }
    
    output += "\n"
}

console.log(output)