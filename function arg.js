//function add(a,b)
//{
 //   var results =a+b
   // console.log(results)
//}
//add(78,43)
//add(67,33)
//var arr1=[4,5,6]
//var arr2=[7,8,5]
//var arr3=[4,3,5]
//var sum1=0
//for(var i=0; i<arr1.length; i++)
//{
  //  sum1+=arr1[i]
    //console.log(sum1)
//}
//var sum2=0
//for(var i=0; i<arr2.length; i++)
//{
  //  sum2+=arr2[i]
    //console.log(sum2)
//}
//function sumOfArray(arr)
//{
 //sum = 0
 //for(var i=0; i<arr.length; i++)
//{
  //  sum +=arr[i]
    //console.log(sum)
//}
//}
//sumOfArray(arr1)
//sumOfArray(arr3)
function tast (a,b,c)
{
    console.log(arguments)
}
tast(2,3,4)
function all()
{
    sum=0
    for(var i=0; i<arguments.length; i++)
    {
        sum += arguments[i]
    }
    return sum
}
var a= all(2,3,4,5,6)
console.log(a)
