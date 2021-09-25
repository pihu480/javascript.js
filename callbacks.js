// const sut=[
//     {name:"pihu",sub:"java"},
//     {name:"aau",sub:"javascript"}
// ]
// function eallsunt(sut){
//     setTimeout(function(){
//         suts.push(sut)
//         console.log(suts)
//     },3000);
// }
// function getsunt(){
//     setTimeout(function(){
//         console.log("pihu")
//     }1000);
// }
// var a=101
function pihu(a){
    setTimeout(function(){
    console.log(" i am pihu"+a)
    },2000);
}
function aay(callback){
    var a=101
    callback(a);
}
aay(pihu)
