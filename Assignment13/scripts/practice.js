class Square
{
  constructor(x, y, w, h)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  get theX()
  {
    return this.x;
  }

  get theY()
  {
    return this.y;
  }

  get theW()
  {
    return this.w;
  }

  get theH()
  {
    return this.h;
  }
  
  setX(x)
  {
  this.x = x;
  }
}


 var theSquare = {"x": 100,
  "y": 100,
  "w": 50,
  "h": 50
}


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
ctx.fillStyle = "#0000FF";

drawSquare();

function update() {
  drawSquare();
}



function drawSquare() {
 var mySquares = [];
  var currentX = theSquare.x;
  for(let i = 0; i < 5; i++)
  {
    var mySquare = new Square(currentX, theSquare.y, theSquare.w, theSquare.h);
    mySquares.push(mySquare);
    currentX += 60;
  }
  

    ctx.fillRect(x, y, 20, 20);
  for(let i = 0; i < mySquare.length; i++)
  {
  ctx.fillRect(mySquares[i].theX, mySquares[i].theY, mySquares[i].theW, mySquares[i].theH);
  }
  
}
