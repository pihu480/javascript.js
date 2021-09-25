let readlineSync = require("readline-sync");
var num= readlineSync.question("enter the numbers");
switch(true){
    case num%3==0:
        console.log(num,"it is even")
        break
    default:
        console.log(num,"it is odd")
}

