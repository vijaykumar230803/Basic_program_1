const prompt =require("prompt-sync")();

const N =prompt("Enter Input NO:");

let output =""

for(let i = 1; i <= N; i = i + 1){
    for(let j = 1; j <= N; j = j + 1){

        output =output +i+" "
    }
    output =output +"\n"
}
console.log(output)