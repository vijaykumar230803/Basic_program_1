const prompt =require("prompt-sync")();

const No =prompt("Enter Input Number:");

const Range =prompt("Enter Input Range:");

if(No >=Range&& No <= Range){

    console.log(true)
}
else{
    console.log(false)
}