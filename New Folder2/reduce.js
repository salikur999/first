var arr=[1,2,3,4,5,6,7,8,9,-1]
//var result=arr.reduce(function(prev,curr)
//{
//return prev + curr
//},100)
//console.log(result)
//var max= arr.reduce(function(prev,curr)
//{
  //  return Math.max(prev,curr)
//})
//console.log(max)
///var min= arr.reduce(function(prev,curr)
//{
  //  return Math.min(prev,curr)
//})
//console.log(min)
function myreduce(arr, cb, acc)
{
    for(var i=0; i<arr.length; i++)
{
    acc= cb(arr[i], acc)
}
return acc
}
var sum = myreduce(arr,function(prev,curr){
    return prev + curr
},1)
var max = myreduce(arr, function(prev,curr){
    return Math.max(prev,curr)
},1)
var min= myreduce(arr,function(prev,curr){
    return Math.min(prev,curr)
},1)
console.log(sum)
console.log(max)
console.log(min)