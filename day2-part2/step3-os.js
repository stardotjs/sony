let os = require("node:os");

// os architecture
console.log("arch ", os.arch() );
console.log("free memory ", os.freemem() );
console.log("total memory ", os.totalmem() );
console.log("user info / username", os.userInfo().username );
console.log("number of cpus ", os.cpus().length );