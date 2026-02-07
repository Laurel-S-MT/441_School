function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Shiny Things!") {
        document.getElementById("story").innerHTML = "Lets fly over to the town! What catches his eye?";
        document.getElementById("choice1").innerHTML = "A golden tassel!";
        document.getElementById("choice2").innerHTML = "A pearl bracelet!";
    } else if (choice == 2 && answer2 == "Colorful Things!") {
        document.getElementById("story").innerHTML = "Lets fly to the countryside! What catches his eye?";
        document.getElementById("choice1").innerHTML = "Wildflowers!";
        document.getElementById("choice2").innerHTML = "Hair ribbons!";
    } else if (choice == 1 && answer1 == "A golden tassel!") {
        document.getElementById("story").innerHTML = "Ah yes, gold will suit the nest nicely.";
        document.getElementById("choice1").innerHTML = "Search for more";
        document.getElementById("choice2").innerHTML = "Head back home";
    } else if (choice == 2 && answer2 == "A pearl bracelet!") {
        document.getElementById("story").innerHTML = "Pearls will look lovely!";
        document.getElementById("choice1").innerHTML = "Search for more shinys";
        document.getElementById("choice2").innerHTML = "Head home";
    } else if (choice == 1 && answer1 == "Wildflowers!") {
        document.getElementById("story").innerHTML = "Good choice! But what tone of colors should he choose?";
        document.getElementById("choice1").innerHTML = "Cool Tones";
        document.getElementById("choice2").innerHTML = "Warm Tones";
    } else if (choice == 2 && answer2 == "Hair ribbons!") {
        document.getElementById("story").innerHTML = "Looks like some children tied a variety of them to the branches. Which kind should he go for?";
        document.getElementById("choice1").innerHTML = "Satin ribbons";
        document.getElementById("choice2").innerHTML = "Lace ribbons";
    }

  
  





}/*keep this bracket as a way to end the line of code and have it work!!! */


document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  const text = document.getElementById("text");

  let count = 0;

  button.addEventListener("click", () => {
    count++;
    text.textContent = `Clicked ${count} times`;
  });
});

console.log(count);
