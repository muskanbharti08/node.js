let figlet = require('figlet');

figlet("Ayush Chaubey",(er,data)=>{
if (er) {
    console.log("something went wrong");
    return er;
}
console.log(data)


});