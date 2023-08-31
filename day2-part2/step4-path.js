const path = require("path");

// console.log( path.join("images","antman.jpg") );
let joinpath = path.join("heroes","avengers","images","antman.jpg");
let normalpath = path.normalize("https://nodejs.org/\/dist/latest-v18.x////\\///docs\/api/\path.html");

console.log(joinpath);
console.log(normalpath);