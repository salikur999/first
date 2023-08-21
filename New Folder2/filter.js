var arr=[1,2,3,4,5,6,7,8,9]
var results=arr.filter(function(value)
{
    return value%2==0
})
console.log(results)
function newResults(arr, cb)
{
    var newArry=[]
    for(var i=0; i<arr.length; i++)
{
    if(cb(arr[i])){
       newArry.push( arr[i])
    }
   
}
return newArry
}
console.log(newResults(arr,function(value){
    return value%2!=0
}))
console.log(newResults(arr,function(value){
    return value>5
}))