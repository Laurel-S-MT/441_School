// let's create an empty array. We will add to this later
var myViewFinderArray = new Array();

// this is the main ViewFinder class
class ViewFinder
{
    // the constructor requires only one title, the description, imagePath, etc.
    // we will create multiple objects from this class
    constructor(title, description, imagePath)
    {
        this.title = title;

        //NEW
        this.description = description;

        //NEW
        this.imagePath = imagePath;
    }

    // this just returns the title concatenated with the string "Title"
    // keep in mind only one return statement can exist in a function
    toString()
    {
        return "Title: " + this.title;    
    }

    // this is the property theTitle which returns the title as well only the title
    get theTitle()
    {
        return this.title;
    }

    //NEW
     get theDescription()
    {
        return this.description;
    }

    //NEW
   get theImage()
    {
        return this.imagePath;
    }



}

// this function is called in the body of the HTML page so that the objects are created and added to the 
// array myViewFinderArray
function initializeArray()
{
    // create the first object from the class ViewFinder
    var myViewFinder = new ViewFinder(
        //title
        "A really funny Pug", 
        //description
        "This pug is making a hilarious face.",
        "imagesEX/pug.jpg");
    // create a second object from the class ViewFinder
    var myViewFinder1 = new ViewFinder(
       //title
        "A really angry tiger", 
        //description
        "A tiger showing its fierce expression.",
        "imagesEX/tiger.jpg");

         var myViewFinder2 = new ViewFinder(
            "A bird",
            "What a pretty bird",
            "imagesEX/Black Billed Magpie Orginal.jpg"
         );

    // add the first object to the array
    myViewFinderArray.push(myViewFinder);
    // add the second object to the array
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);

}

// this function gets an object from the array and puts it into the element with the id title 
function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);

    document.getElementById("title").innerHTML =
        myViewFinderArray[randomNumber].theTitle;

    document.getElementById("viewfinderImage").src =
        myViewFinderArray[randomNumber].theImage;

    document.getElementById("description").innerHTML =
    myViewFinderArray[randomNumber].theDescription;
}


