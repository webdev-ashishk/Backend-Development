var a = 1000;
const b = 2000;
let c = 3000;
module.exports = a;

var figlet = require("figlet");

figlet("Anju", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
