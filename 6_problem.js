const prompt =require("prompt-sync")();

const string =prompt("Enter input :");

for(let i =0; i < string.length; i = i + 1){
    if(string[i]== 'a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u'){

        console.log("vowels")}

    else{
    console.log("consonants")
   }}