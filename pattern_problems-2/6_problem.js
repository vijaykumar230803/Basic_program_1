
const prompt =require("prompt-sync")();

const Row =prompt("Enter Row of NO; ");

const Column =prompt("Enter Column of NO:");

let output = ""

let Z =1

let X =0

  for (let i = 1; i <= Row; i = i + 1)
 {
       for (let j = 1; j <= Row; j = j +1)
        if(i % 2==1){
            output = output +Z+"  "
        }
          else if(i % 2==0){
            output =output +X +"  "
          }
          else {
            output = output +i
          }

          output = output +"\n"


  }

console.log(output)