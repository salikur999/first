function greet(msg){
    function greeting(name){
        return msg +' '+name

    }
    return greeting
}
var gm=greet('Good Morning')
var msg=gm('Subrina sultina')
console.log(msg)
var gn= greet('Good Night')
console.log(gn('Sabrina sultana'))
function base(b)
{
    return function (n)
    {
        var results =1
        for(var i=0; i<b; i++)
        {
            results *=n
        }
        return results 
    }
}
var base4= base(4)
console.log(base4(3))
var base5= base(5)
console.log(base5(5))
