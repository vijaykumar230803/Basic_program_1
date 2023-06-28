const prompt =require("prompt-sync")();

const Num =prompt("Enter Input No:")

let output=""

for(let i = 1 ;i <= Num; i = i + 1)
{
    for (let j =1 ; j <= Num; j = j + 1){

        output = output +i+"   "
    }
        output = output +"\n"
} 
   console.log(output)