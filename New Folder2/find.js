var arr=[1,2,34,5,6,7,87,96,96,97,96,55,4]
//var result= arr.find(function(value)
//{ return value===96})
//console.log(result)
function results(arr,cb)
{
    for(var i=0; i<arr.length; i++)
    {
        if(cb(arr[i]))
        {
            //return arr[i] //value
            return i //index
        }
    }
}
console.log(results(arr,function(value)
{
     return value===96
}))