var arr = [4,5,6,7,8,10]
for(var i=0; i<(arr.length /2); i++)
{
    var temp=arr[i]
    arr[i]=arr[arr.length-1-i]
    arr[arr.length-1-i] = temp
}
console.log(arr)
console.log(arr.reverse())
