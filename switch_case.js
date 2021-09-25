let readlineSync = require("readline-sync");
var num1 = readlineSync.question("enter the max");
var a = 45
var b = 56
switch(true){
    case a != b:
        console.log("a is not equal to b")
        break

    default:
        console.log("a is equal to b")
}
// max number

var num2 = readlineSync.question("enter the max");
var num3 = readlineSync.question("enter the max");
switch(true){
    case num1<num2&&num2>num3:
        console.log(num1,"num1 is max")
        break

    case num2>num3&&num3<num1:
        console.log(num2,"num2 is max")
        break

    case num3<num1&&num1>num2:
        console.log(num3,"num3is max")
        break
        
    default:
        console.log("min")
}
