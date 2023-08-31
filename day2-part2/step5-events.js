const EventEmitter = require("node:events").EventEmitter;
let sonyEvent = new EventEmitter();

// sonyEvent.setMaxListeners(3);
let count = 0; 
let sonyHandler1 = function(evt){
    console.log("afternoon event happened ", "first listener", evt)
}
/* let sonyHandler2 = function(evt){
    console.log("afternoon event happened ", "second listener", evt)
}
 */
sonyEvent.on("afternoon", sonyHandler1);
// sonyEvent.on("afternoon", sonyHandler2);

/* sonyEvent.on("afternoon", function(evt){
    console.log("afternoon event happened ", "second listener", evt)
});
sonyEvent.on("afternoon", function(evt){
    console.log("afternoon event happened ", "third listener", evt)
}); */

// console.log(sonyEvent.getMaxListeners());
/* 
*/
let si = setInterval(function(){
    count++;
    if(count <= 5){
        sonyEvent.emit("afternoon","message of the event");
    }else{
        // console.log("event no longer dispatched")
        sonyEvent.off("afternoon", sonyHandler1);
        clearInterval(si);
        console.log("timmer stopped")
        console.log("event stopped")
    }
},1000); 