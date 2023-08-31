let user = "Vijay";
let city = "Bangalore";
let company = "Sony";
let lastname = "Shivakumar"

// console.log(user);


// named exports
/* 
module.exports.user = user; 
module.exports.city = city; 
module.exports.company = company; 
module.exports.fullname = function(){
    return user+" "+lastname;
};  
*/
// defautl export 
module.exports = {
    user,city,company,
    fullname : function(){
        return user+" "+lastname;
    }
}