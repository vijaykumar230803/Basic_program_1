const prompt =require("prompt-sync")();

let N =5

let output=""

for(let i = 1; i <= 5; i = i + 1)
{
    for(let j = 1; j <= 5; j = j + 1){

    output = output + i + " "
    }
    output = output +"\n"
}
console.log(output)