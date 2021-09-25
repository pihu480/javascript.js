let a = [2,312,123,3,1222,23,12,12,98,546]
var largest = 0
var i = 0
while (i<=a.length){
  if (a[i]>largest){
    largest = a[i]
  }
  i++
}
console.log (largest)


// let a=[5,6,7,4,3,]
// var max=0
// var i=0
// while(i<=a.length){
//   if (a[i]>max){
//     max=a[i]
//   }
//   i++
// }
// console.log(max)