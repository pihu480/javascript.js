let a=['s', 'd', 'f', 'j', 's', 'a', 'j', 'd', 'f', 'd']
var b=[] 
var i=0
while (i<(a).length){
    var count=0
    var j=0
    while (j<(a).length){
        if (a[j]==a[i])
            count++
        j++
    if (a[i].includes(b)){
        //  continue
    }
    b.push(a[i])
    console.log (a[i],"",count)
    }
}
    i++
condsple.log (b) 




// console.log ("Enter number")
// let readlineSync = require("readline-sync");
// var n = readlineSync.question("enter the number")
// var i=1
// while (i<=5){
//     j=n
//     var v=""
//     while (j>=5){
//         console.log("*"+v)
//         j=j-1
//     }
//     console.log()
//     i=i+1
    
// }

