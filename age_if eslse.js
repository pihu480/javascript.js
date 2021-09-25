let readlineSync = require("readline-sync")
var age = readlineSync.question("Enter your age.")
if (age < 13){
   console.log("Hey! kid")
}
else if (age>13 && age < 20){
   pass
}