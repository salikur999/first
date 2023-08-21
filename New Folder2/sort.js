var arr=[1,2,3,4,5,6,7,8,10,-2,-1,-4,-6,9,8,7]
//var sortelement=arr.sort(function(value){
    //return value
//})
//console.log(sortelement)
arr.sort(function(a,b)
{
    if(a>b)
    {
        return 1
    }
    else if(a<b)
    {
        return -1
    }
    else{
        return 0
    }

}
)
console.log(arr)
var person=[
    {name: 'A',
     age: 30
},
{
    name: 'B',
    age: 29
},
{
    name: 'C',
    age: 28
}
]
person.sort(function(a,b){
    if(a.age>b.age)
    {
        return 1
    }
    else if(a.age<b.age)
    {
        return -1
    }
    else
    {
        return 0
    }
})
console.log(person)
var res1=arr.every(function(value){
    return value%2==0
})
console.log(res1)
var res2= arr.some(function(value)
{return value % 2!=0})
console.log(res2)
var res3=arr.every(function(value){
    return value<55
})
console.log(res3)
