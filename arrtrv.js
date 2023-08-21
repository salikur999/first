var arr=[2,3,4,5,6,7,9,10,54,45,66]
found=9
var isFound= false
for(var i=0; i<arr.length; i++){
    if(arr[i]==found)
    {
        console.log('Data is found')
        isFound= true
    }
}
if(!isFound)
{
    console.log('Data is not found')
}