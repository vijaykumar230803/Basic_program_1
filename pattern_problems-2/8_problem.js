const prompt =require("prompt-sync")();

const N = parseInt(prompt("Enter Input No;"))

let output =""

let Z =1

for(let i = 1 ; i <= N; i = i + 1)
{
    for (let j = 1; j <=N; j= j + 1)

    if(j>i||j==i)
{
    output = output+j+ "   "
}


    output=output+"   "

{
output = output +"\n"
}
}
console.log(output)