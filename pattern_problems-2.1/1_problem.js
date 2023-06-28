const prompt =require("prompt-sync")();

const N =prompt("Enter Input NO:");

let B ="*"

let output =""

for(let i = 0; i < N; i = i + 1){
    for(let j = 0 ; j < N; j = j + 1){

        output = output +B+" "
    }
    output =output+"\n"
}
console.log(output)