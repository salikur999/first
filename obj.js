var obj = {
    x: 10, y:50
}
var obj2={
    x:10,
    y:67
}
console.log(obj.x==obj2.x&&obj.y==obj2.y)
var obj3 = {
    x: 50,
    y: 60
}
obj3.z=70
console.log(obj3)
obj3.a=80
console.log(obj3)
delete obj3.a
console.log(obj3)
console.log(obj3.x + obj3.y)