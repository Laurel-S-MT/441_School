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
        "Civil Rights March from Selma to Montgamery, Alabama, 1965, Photograpgh by Pettus, Peter. Sourced from Library of Congress.", 

        //description
        "In the middle of the 20th century, a nationwide movement for equal rights for African Americans and for an end to racial segregation and exclusion arose across the United States... They faced opposition on many fronts and fell victim to bombings and beatings, arrest and assassination. By the end of the 1960s, the civil rights movement had brought about dramatic changes in the law and in public practice, and had secured legal protection of rights and freedoms for African Americans that would shape American life for decades to come. Sourced from Library of Congress.",
      
        //image
        "images/selma-march.jpg");

    // create a second object from the class ViewFinder
    var myViewFinder1 = new ViewFinder(
       //title
        "Tank Man, China Beijing, June 5th, 1989, Photogragh by Jeff Widener. Sourced from Britannica.", 
        //description
        "Tank Man, unidentified Chinese man who on June 5, 1989, faced down a column of People’s Liberation Army (PLA) tanks on Chang’an Avenue in Beijing. The encounter came one day after the government launched a bloody crackdown that killed an unknown number of people in Beijing and cleared protesters from Tiananmen Square. “Tank Man,” as he was dubbed by the international media, became an enduring symbol of defiance in the face of violent authoritarianism. Sourced from Britannica.",
        "images/Tank Man.webp");

    var myViewFinder2 = new ViewFinder(
    "Polling Booth, 1918, Colin Waters/ Alamy Stock Photo, Sourced by English Heritage.",
    " In 1918, the Representation of the People Act was passed, which granted the right to vote to women over the age of 30 who met a property qualification, and all men over the age of 21. The act enfranchised around 8.5 million women who made up 40% of the electorate. In December, women took to the polls for the first time in the 1918 General Election. There was great interest in how the female electorate would impact the election, and parties across the political spectrum appealed to women voters. While this act represented a significant milestone, women did not have the vote on the same terms as men. Indeed, many women who had campaigned tirelessly for the vote remained excluded. So the struggle for equal franchise continued. Sourced by English Heritage.",
    "images/Women Vote 1918.jpg"
     );

var myViewFinder3 = new ViewFinder(

"Sudan Water, Photogragher unknown/UNOPS, Sourced by United Nations.",

"Water is at the core of sustainable development and is critical for socio-economic development, energy and food production, healthy ecosystems and for human survival itself...Water is also a rights issue. As the global population grows, there is an increasing need to balance all of the competing commercial demands on water resources, so that communities have enough for their needs. In particular, women and girls must have access to clean, private sanitation facilities to manage menstruation and maternity in dignity and safety. At the human level, water cannot be seen in isolation from sanitation. Together, they are vital for reducing the global burden of disease and improving the health, education and economic productivity of populations. Sourced by United Nations.",

"images/sudan-water.jpg"
);

var myViewFinder4 = new ViewFinder(

    "Food Distribution in El Salvador, Photo by David Fernandez/WFP, Sourced by United Nations.",
"Even though today's global food production is enough to feed everyone on the planet, hunger continues to increase in some parts of the world. Despite some recent progress in reducing hunger in Asia and Latin America, the world is still facing food crises in many regions, especially in Africa, where the situation is dire. Sourced by United Nations.",
"images/El Salvador Food.jpg"
);


    // add the first object to the array
    myViewFinderArray.push(myViewFinder);
    // add the second object to the array
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);

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

      document.getElementById("credit").innerHTML =
    myViewFinderArray[randomNumber].theDescription;
}


