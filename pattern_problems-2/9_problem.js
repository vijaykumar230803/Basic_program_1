const prompt=require("prompt-sync")();

const N = parseInt(prompt("Enter Input No:"))

let output =""

for (let i=N; i >0 ; i = i - 1)
{
    for(let j = N; j >0; j = j - 1)

    if(i <j||j==i)
    output = output + j+"  "

    output = output +"  "
{
   output = output + "\n"}

}
console.log(output)