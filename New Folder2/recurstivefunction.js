function sayHi(n)
{
if(n==0)
{
    return 
}
console.log('I am calling')
sayHi(n-1)
}
sayHi(10)
 function sum(n)
{
    if((n==1))
    {
        return 1
    }
    return n + sum(n-1)

}
console.log(sum(10))
function fact(n)
{
    if(n==1){
        return 1
    }
    return n*=fact(n-1)
}
console.log(fact(6))
var arr=[1,2,3,4,5,6,7]
function sumOfArray(arr, Index)
{
if(Index==0){
    return 1
}
return arr[Index]+ sumOfArray(arr,Index-1)
}
console.log(sumOfArray(arr, arr.length-1))
