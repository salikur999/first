//var rect={
  //  width:75,
    //height:100,
    //draw:function()
    //{
      //  console.log('I am rectangel')
        //this.printPropeites()
    //},
    //printPropeites: function()
    //{
      //  console.log('My width is'+' '+ this.width)
        //console.log('My height is'+' '+this.height)
    //}
//}
//rect.draw()
//another={
  //  width:45,
    //height:54,
    //print:rect.printPropeites
//}
//another.print()
//var CreateRect=function(width,height)
//{
  //  {
    //this.width=width
    //this.height=height
      //  this.draw=function()
        //{
          //  console.log('I am rectangel')
            //this.printPropeites()
        //}
        //this.printPropeites= function()
        //{
          //  console.log('My width is'+' '+ this.width)
            //console.log('My height is'+' '+this.height)
        //}
    //}
//}
//var results=new CreateRect(57,56)
//results.draw()
//var CreateRect=function(width,height)
//{
    //{
    //this.width=width
    //this.height=height
    //var position={
      //x:39,
      //y:-100
    //}
        
        //var printPropeites= function()
        //{
            //console.log('My width is'+' '+ width)
          //  console.log('My height is'+' '+ height)
        //}
        //this.draw=function()
        //{
          //  console.log('I am rectangel')
        //    printPropeites()
      //      console.log('Location x='+ position.x , 'y='+position.y)
    //    }
  //  }
//}
//var results=new CreateRect(57,56)
//results.draw()

//var n=10
//function change(n)
//{
  //n=n + 100
  //console.log(n)
//}
//change(n)
//var obj={
  //a:34,
 // b:23
//}
//function changeME(){
  //obj.a=obj.a+100
  //obj.b=obj.b+200
  //console.log(obj.a+obj.b)
//}
//changeME(obj)
//var CreateRect=function(width,height)
//{
  //  {
    //this.width=width
    //this.height=height
    //var position={
      //x:39,
      //y:-100
    //}
        
      //  var printPropeites= function()
        //{
          //  console.log('My width is'+' '+ this.width)
            //console.log('My height is'+' '+ this.height)
        //}.bind(this)
       // this.getPosition=function()
       // {
        //  return position
        //}
        //this.draw=function()
        //{
          //  console.log('I am rectangel')
            //printPropeites()
            //console.log('Location x='+ position.x , 'y='+position.y)
        //}
    //}
    //Object.defineProperty(this, 'position',{
     // get:function()
      //{
        //return position
      //},
      //set:function (value)
      //{
        //position=value
      //}
    //})
//}
//var results=new CreateRect(57,56)
//results.draw()
//console.log(rect1.getPosition())
//results.position={
  //x:456,
  //y:-299
//}
//console.log(results.position)

/*function square(width)
{
  this.width=width
  this.getWidth= function()
  {
    console.log('Width is ' + this.width)
  }
}
square.prototype=
{
  draw:function()
  {
    this.getWidth()
    console.log('Draw')
  },
  toString:function()
  {
    return'This width '+ this.width
  }

}
var sqr1=new square(10)
var sqr2=new square(8)
/*for(var i in per2)
{
  console.log(i)
}*/
/*console.log(Object.keys(sqr1))*/

/*function shape (color){
this.color=color
}
shape.prototype.common=function()
  {
    console.log('I am common Method')
  }
function square(width,color)
{
  shape.call(this,color)
  this.width=width
}
square.prototype=Object.create(shape.prototype)
//protoype reset
square.prototype.constructor = square
//constructor reset
square.prototype.draw=function()
  {
    console.log('Drawing')
  }
  //var shape=new shape()
  var sqr=new square(45,'green')

  function circle(rasius, color)
  {
    shape.call(this,color)
    this.rasius=rasius
  }
  circle.prototype = Object.create(shape.prototype)

circle.prototype.constructor=circle*/

/*function extend(parent,child)
{
  child.prototype=Object.create(parent.prototype)
  child.prototype.constructor =child
}
function shape (color){
  this.color=color
  }
  shape.prototype.common=function()
    {
      console.log('I am common Method')
    }
  function square(width,color)
  {
    shape.call(this,color)
    this.width=width
  }
  extend(shape,square)
  square.prototype.draw=function()
    {
      console.log('Drawing')
    }
    square.prototype.common=function()
  {
    console.log('I am calling From square and I have Overridden.')
  }
    var sqr=new square(45,'green')
  extend(shape,circle)
    function circle(rasius, color)
    {
      shape.call(this,color)
      this.rasius=rasius
    }
    
    circle.prototype.common=function()
    {//shape.prototype.common.call(this)
      console.log('I am calling From circle and I have Overridden.')
    }
    var c=new circle(23,'red')
    var s=new shape('black')
    var shapes=[s,sqr,c]
    for(var i of shapes)
    {
     i.common(console.log(i))
    }*/
    function mixin(target, ...soutces)
    {
      Object.assign(target, ...soutces)
    }
    var canwalk= {
      walk:function()
      {
        console.log('walking...')
      }
    }
    var canEat={
      Eat:function()
      {
        console.log('Eating...')
      }
    }
    var canSwim={
      swim:function()
    {
      console.log('Swiming...')
    }
    }
    function persone(name)
    {
      this.name=name
    }
    //Object.assign(persone.prototype, canwalk,canEat)
    mixin(persone.prototype,canwalk,canEat)
    persone=new persone('Sabrina')
    console.log(persone)
    function GoldFish(name)
    {
      this.name=name
    }
    mixin(GoldFish.prototype, canEat, canSwim)
    GoldFish= new GoldFish('Skipper')
    console.log(GoldFish)