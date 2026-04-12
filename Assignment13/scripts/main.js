
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

var x2 = 100;
var y2 = 100;

var x3 = 300;
var y3 = 300;

var hasHit = false;

//OLD
//drawSquare();
//drawRect();
//drawCircle();


//NEW
var player;
var obstacles = [];
var collect = [];


function drawSquare()
{
  //ctx.clearRect(0,0,800,600);
  player = new Shapes(x,y,20,20," #ff49e7");
  ctx.fillStyle = player.theColor;
  ctx.fillRect(player.theX, player.theY, player.theWidth, player.theHeight);


} 

function drawCircle()
{
  collect = new Shapes(x3,y3,50,50," #ecda37");

}



function drawRect()
{
  
  obstacles = new Shapes(x2,y2,50,280," #18244b");
  ctx.fillStyle = obstacles.theColor;
  ctx.fillRect(obstacles.theX, obstacles.theY, obstacles.theWidth, obstacles.theHeight);

}


//GPT Help VVV 
createCoins();

function createCoins()
{
    collect.push({x:100, y:100, w:30, h:30, color:"#f1e53a"});
    collect.push({x:590, y:260, w:30, h:30, color:"#f1e53a"});
    collect.push({x:500, y:450,  w:30, h:30,  color:"#f1e53a"});
   
}



function drawCoins()
{
    for(let i = 0; i < collect.length; i++)
    {
        let coin = collect[i];

        ctx.fillStyle = coin.color;
        ctx.beginPath();
        ctx.arc(
            coin.x + coin.w / 2,   // center X
            coin.y + coin.h / 2,   // center Y
            coin.w / 2,            // radius
            0,
            2 * Math.PI
        );
        ctx.fill();
    }
}



function checkCoinCollection()
{
    for(let i = collect.length - 1; i >= 0; i--)
    {
        let coin = collect[i];

        if (
            !(player.theY + player.theHeight < coin.y ||
              player.theY > coin.y + coin.h ||
              player.theX + player.theWidth < coin.x ||
              player.theX > coin.x + coin.w)
        )
        {
            // remove coin when collected
            collect.splice(i, 1);
        }
    }
}

createObstacles();

function createObstacles()
{
    obstacles.push({x:100, y:100, w:50, h:200, color:"#18244b", speedX:10, speedY:10});
    obstacles.push({x:350, y:150, w:400, h:50, color:"#18244b", speedX:10, speedY:10});
    obstacles.push({x:200, y:50,  w:80, h:50,  color:"#496ee9",    speedX:8, speedY:8});
   
     obstacles.push({x:300, y:200, w:170, h:40, color:"#94113d",  speedX:15, speedY:15});
}



function drawObstacles()
{
    for(let i = 0; i < obstacles.length; i++)
    {
        let obs = obstacles[i];

        ctx.fillStyle = obs.color;
        ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
    }
}



function moveObstacles()
{
    for(let i = 0; i < obstacles.length; i++)
    {
        let obs = obstacles[i];

        obs.x += obs.speedX;
        obs.y += obs.speedY;

        if (obs.x <= 0 || obs.x >= canvas.width - obs.w)
        {
            obs.speedX *= -1;
        }

        if (obs.y <= 0 || obs.y >= canvas.height - obs.h)
        {
            obs.speedY *= -1;
        }
    }
}


function checkCollisions()
{
    for(let i = 0; i < obstacles.length; i++)
    {
        let obs = obstacles[i];

        if (
            !(player.theY + player.theHeight < obs.y ||
              player.theY > obs.y + obs.h ||
              player.theX + player.theWidth < obs.x ||
              player.theX > obs.x + obs.w)
        )
        {
            if(!hasHit)
            {
                alert("OW! I better avoid those!");
                hasHit = true;
            }
            return;
        }
    }


    hasHit = false;
}
//end of help


//NOTE:moving player 
$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});



function getKey(event)
{  

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

  

function hasCollided(player, obstacles) {
    return !(
        ((player.y + player.height) < (obstacles.y)) ||
        (player.y > (obstacles.y + obstacles.height)) ||
        ((player.x + player.width) < obstacles.x) ||
        (player.x > (obstacles.x + obstacles.width))
    );
}



setInterval(drawAll, 50); // runs every 50ms
function drawAll()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    keepSquareInBounds();
    moveObstacles();

    drawSquare();
    drawObstacles();
    drawCoins();

    checkCollisions();
    checkCoinCollection();
}

//function drawAll()
//{
 //   ctx.clearRect(0, 0, canvas.width, canvas.height); 

//  updateRect();

//keepSquareInBounds();
 // keepRectInBounds();
   // keepCircleInBounds();


   //  drawSquare();
  //  drawRect();
   // drawCircle();


//}

var squareSize = 20;
var rectSize = 50;
var circleSize = 50;




function keepSquareInBounds()
{
    if (x < 0) x = 0;
    if (x > canvas.width - squareSize) x = canvas.width - squareSize;

    if (y < 0) y = 0;
    if (y > canvas.height - squareSize) y = canvas.height - squareSize;
}


var rectSpeedX = 3;
var rectSpeedY = 3;



function keepRectInBounds()
{
    //move the rectangle
    x2 += rectSpeedX;
    y2 += rectSpeedY;

    // bounce on walls (X)
    if (x2 <= 0 || x2 >= canvas.width - obstacles.theWidth)
    {
        rectSpeedX *= -1;
    }

    // bounce on walls (Y)
    if (y2 <= 0 || y2 >= canvas.height - obstacles.theHeight)
    {
        rectSpeedY *= -1;
    }
}


function updateRect()
{
    x2 += rectSpeedX;
    y2 += rectSpeedY;

    // bounce off walls
    if (x2 <= 0 || x2 >= canvas.width - obstacles.theWidth)
    {
        rectSpeedX *= -1;
    }

    if (y2 <= 0 || y2 >= canvas.height - obstacles.theHeight)
    {
        rectSpeedY *= -1;
    }
}







