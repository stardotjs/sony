const fs = require("node:fs");
let avengers = ["Ironman","Thor", "Hulk", "Black Widow", "Scarlet Witch","Dr Strange"];
let cities = ["New York","Bangalore", "Singapore", "Mumbai"];
let fileTempData = null;
let generator = function(){
    return { 
            "title" : avengers[Math.ceil(Math.random() * avengers.length-1)], 
            "power" : Math.round(Math.random() * 10), 
            "city" : cities[Math.ceil(Math.random() * cities.length-1)]
        } 
}
fs.readFile("data/avenger.json","utf-8",(err,data) => {
    if(err){
        console.log("Error ", err)
    }else{
        fileTempData = JSON.parse(data);
        for(let i = 0; i < 50; i++){
            fileTempData.list.push(generator());
        }
        // console.log(fileTempData);
        fs.writeFileSync("data/avenger.json",JSON.stringify(fileTempData),"utf-8");
    }
});