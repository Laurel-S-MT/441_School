var summerSelector = "#sum";
var allsummer = new Array();
var imageIndex = 0;
var words = new Array();

class summerInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function initializeArray()
{
    var sum1 = new summerInfo("#sum", "images/spring.jpg");
    var sum2 = new summerInfo("#sum", "images/fall.avif");
    var sum3 = new summerInfo("#sum", "images/summer.avif");

    allsummer.push(sum1);
    allsummer.push(sum2);
    allsummer.push(sum3);
}

$(document).ready(function(){

    initializeArray();

    $("button").click(function(){

        imageIndex++;

        if(imageIndex >= allsummer.length)
        {
            imageIndex = 0;
        }

        $(allsummer[imageIndex].theSelector)
            .fadeOut(function(){
                $(this).attr("src", allsummer[imageIndex].theImagePath).fadeIn();
            });

   $(".stuff").fadeOut();
        $("#third").toggle();

        setInterval(moveSquare, 400);

         $(".stuff").fadeOut();
        $("#third").toggle();

        setInterval(movecircle, 400);

         setInterval(movetriangle, 400);

setInterval(movethird, 400);



    });

});


$(document).ready(function(){
    initializeArray();
    console.log(words.length);
    console.log(words[0].toString());
    console.log(words[0].theSelector);
    console.log(words[0].theImagePath);
    
    //$(words[0].theSelector).src = words[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
    $(words[0].theSelector).attr("src", words[0].theImagePath);

    $("button").click(function(){
       
        $(".stuff").slideUp();

       // $("#third").toggle();
         //  setInterval(moveSquare, 400);
        
        $(words[0].theSelector).fadeOut().fadeIn();
        
    });
    
});

function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}

function movecircle()
{
    $("#circle").animate({left:450}).animate({top:100}).animate({left:0}).animate({top:600});
}


function movetriangle()
{
    $("#triangle").animate({left:50}).animate({top:500}).animate({left:0}).animate({top:100});
}

function movethird()
{
    $("#third").slideUp().slideDown();
}

