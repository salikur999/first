function add(a,b)
{
    return a+b
}
function maniPulet(a,b,func)
{
    var c= a+b
    var d=a-b
    return function ()
    {
        var m=func(a,b)
        return c*d*m
    }
}
var multiplay= maniPulet(2,6,add)
console.log(multiplay())