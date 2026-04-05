class Shapes{
    constructor(x, y, height, width, color)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }
  
    setX(x)
    {
       this.x = x;
    }
    setY(y)
    {
       this.y = y;
    }
    setHeight(height)
    {
       this.height = height;
    }
    setWidth(width)
    {
       this.width = width;
    }
    setColor(color)
    {
        this.color = color;
    }
    get theX()
    {
        return this.x;
    }
    get theY()
    {
        return this.y;
    }
    get theHeight()
    {
        return this.height;
    }
    get theWidth()
    {
        return this.width;
    }
    get theColor()
    {
        return this.color;
    }
}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 270;
var y2 = 100;
var x3 = 300;
var y3 = 300;

drawSquare();

//HIT THE CIRCLE FOR COLLISION DETECTION!

var square1;
var circle2;
var triangle3;

function drawSquare()
{
  //ctx.clearRect(0,0,800,600);
  square1 = new Shapes(x,y,20,20," #ff49e7");
  ctx.fillStyle = square1.theColor;
  ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);




}



drawCircle();



var circleSpeed = 50;



function drawCircle()
{
    //ctx.clearRect(100,100,50,50);
  circle2 = new Shapes(x2,y2,50,50,"#1dbff0");
  ctx.fillStyle = circle2.theColor;
  ctx.beginPath();
  ctx.arc(circle2.theX, circle2.theY, circle2.theWidth / 2, 0, 2 * Math.PI);
  ctx.fill();
  
//Not working....need to move circle 
  //if(drawCircle >= 500 || drawCircle <= 93)
   // {
     
      //  circleSpeed *= -1;
   // }

   //?????????????? HALP

   //if(circle2 >= 500 || circle2 <= 93)
    //{
     
     //  circleSpeed *= -1;
   // }

x++; //Nothing on this one!!! C R Y 

//If you see this I hope you understand that I'm trying :")


}


drawTriangle();

function drawTriangle()
{
  //ctx.clearRect(200,200,50,50);
  var triangle3 = new Shapes(x3,y3,50,50,"#22ff59");
  ctx.fillStyle = triangle3.theColor;
  ctx.beginPath();
  ctx.moveTo(triangle3.theX, triangle3.theY);
  ctx.lineTo(triangle3.theX + triangle3.theWidth, triangle3.theY);
  ctx.lineTo(triangle3.theX + triangle3.theWidth / 2, triangle3.theY + triangle3.theHeight);
  ctx.fill();

  
}






$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{  
    var didCollide = hasCollided(square1, circle2);
  if(didCollide)
    {
      window.alert("I tried my best");
    }

    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);

  
if(actualLetter == "w")
    {
        moveUp();
    }
 else if(actualLetter == "s")
    {
        moveDown();
    }
 else if(actualLetter == "d")
    {
        moveRight();
    }
 else if(actualLetter == "a")
    {
        moveLeft();
    }
    drawAll();
}

function moveUp()
{
    y-=10;
}

function moveDown()
{
    y+=10;
}
function moveLeft()
{
    x-=10;
}
function moveRight()
{
    x+=10;
}


function hasCollided(square1, circle2) {
    return !(
        ((square1.y + square1.height) < (circle2.y)) ||
        (square1.y > (circle2.y + circle2.height)) ||
        ((square1.x + square1.width) < circle2.x) ||
        (square1.x > (circle2.x + circle2.width))
    );
}







//gpt help VVV 


var squareSize = 20;
var circleSize = 50;
var triangleSize = 50;



var myTime= 10;



function drawAll()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

keepSquareInBounds();
  keepCircleInBounds();
    keepTriangleInBounds();


     drawSquare();
    drawCircle();
    drawTriangle();


}


function keepSquareInBounds()
{
    if (x < 0) x = 0;
    if (x > canvas.width - squareSize) x = canvas.width - squareSize;

    if (y < 0) y = 0;
    if (y > canvas.height - squareSize) y = canvas.height - squareSize;
}




function keepCircleInBounds()
{
    var radius = circleSize / 2;

    if (x2 < radius) x2 = radius;
    if (x2 > canvas.width - radius) x2 = canvas.width - radius;

    if (y2 < radius) y2 = radius;
    if (y2 > canvas.height - radius) y2 = canvas.height - radius;

}



function keepTriangleInBounds()
{
    if (x3 < 0) x3 = 0;
    if (x3 > canvas.width - triangleSize) x3 = canvas.width - triangleSize;

    if (y3 < 0) y3 = 0;
    if (y3 > canvas.height - triangleSize) y3 = canvas.height - triangleSize;
}




