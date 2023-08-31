const fs = require("node:fs");
console.log("line 2")
// fs.writeFileSync("temp.txt","welcome to your life");
/* 
fs.writeFile("temp.txt","\nwelcome to your life",{flag : 'a'},function(err){
    if(err){
        console.log("Error ", err)
    }else{
        console.log("line 8")
    }
});
console.log("line 11") 
*/

// console.log(fs.readFileSync("temp.txt","utf-8"));
/*
fs.readFile("temp.txt","utf-8",function(error, data){
    if(error){ 
        console.log("Error ", error)
    }
    else{
        console.log(data);
    }
})
*/