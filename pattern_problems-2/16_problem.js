const prompt =require("prompt-sync")();

const N =parseInt(prompt("Enter Input No:"));

let y = "*"

let output = ""

for(let i = 1; i <= N; i = i + 1)
{
    for (let j = 1;j <= N; j = j + 1)

    if(i==1||i==N||j==1||j==N||i==3&&j==3){
        output = output +y 
    }

else{
    output = output +" "}

    output = output + "\n"

}console.log(output)