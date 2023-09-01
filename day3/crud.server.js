const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config.json");

/* 
user._id : ObjectId
user.title : String
user.firstname : String
user.lastname : String
user.power : Int32
user.city : String
*/

let ObjectId = mongoose.Schema.ObjectId;
// let Int32 = mongoose.Schema.Int32;
let User = mongoose.model("User", mongoose.Schema({
    id : ObjectId,
    title :String,
    firstname : String,
    lastname : String,
    power : Number,
    city : String
}));

mongoose.connect(config.cloudDbUrl)
.then( res => console.log("DB Connected"))
.catch( error => console.log("Error", error));

// Ceate Read Update Delete

let app = express();
app.use(express.static(__dirname+"/public"));
app.use(express.json())
// READ
app.get("/data", (req, res) => {
    // res.send("hello from express curd app");
    User.find()
    .then(dbres => 
        res.send(dbres)
        )
        .catch(err => console.log(err))
    });
// CREATE
app.post("/data", (req, res) => {
    let user = new User(req.body);
    user.save(req.body)
    .then(dbres => res.send({ "message" : dbres.title+" was added" }))
    .catch(error => console.log("Error", error))

   // console.log(req.body);
   // User.save(req.body).then(dbres => res.send({ "message" : dbres.title+" was added" })).catch(error)
});
// DELETE
app.delete("/delete/:hid", (req, res)=>{
    // User.findByIdAndRemove(req.params['hid'])
    User.findByIdAndRemove({ _id : req.params['hid'] })
    .then(dbres => res.send({ "message" : dbres.title+" was deleted" }))
    .catch(error => console.log("Error", error))
}); 

// READ TO UPDATE
app.get("/edit/:hid", (req, res) => {
    User.findById({ _id : req.params['hid'] })
    .then( dbres => res.send(dbres) )
    .catch( err => console.log("Error", err) )
})
// UPDATE
app.put("/edit/:hid", (req, res) => {
   // console.log("Put requeste recieved", req.body);
   User.findById({ _id : req.params['hid'] })
    .then( dbres => {
        dbres.title = req.body.title;
        dbres.firstname = req.body.firstname;
        dbres.lastname = req.body.lastname;
        dbres.power = req.body.power;
        dbres.city = req.body.city;
        dbres.save()
        .then( updateres => res.send({ message : "Updated "+updateres.title }) )
        .catch(updateerr => console.log(updateerr) )
    } )
    .catch( err => console.log("Error", err) )
})

/* 
app.get(); 
app.post(); 
app.delete(); 
app.put();
app.patch();
 */
app.listen(config.port, config.host, (error) => {
    error ? console.log("Error handler was called", error)
    : console.log(`Server is now live on ${ config.host }:${ config.port }`)
    
});
