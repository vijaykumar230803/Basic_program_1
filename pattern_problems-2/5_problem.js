const prompt =require("prompt-sync")();

const N =prompt("Enter Input No:");

let output =""

for(let i = 1; i <= N; i = i + 1)
{
      for(let j = 1; j <= N; j = j + 1){

        output = output + j + "  "
      }
      output = output +"\n"
}
console.log(output)