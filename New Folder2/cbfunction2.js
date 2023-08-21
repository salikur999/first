var arr=[1,2,3,4,5]
var sqArr= arr.map(function(value)
{
   // return Math.random()*5
    return value*value
})
console.log(sqArr)
function map(arr,cb)
{
    var NewArry=[]
    for(var i=0; i<arr.length; i++)
    {
       // var temp=arr[i]*arr[i]
       var temp=cb(arr[i])
        NewArry.push(temp)
    }
    return NewArry
    
}
var qb=map(arr,function(value)
{
    return value*value*value
})
var mten=map(arr,function(value)
{
return value*10
})
console.log(arr)
console.log(qb)
console.log(mten)