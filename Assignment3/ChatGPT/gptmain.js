let stepsTaken = 0;

function makeChoice(_choice) {
  const story = document.getElementById("story");
  const image = document.getElementById("sceneImage");
  const choices = document.getElementById("choices");

  stepsTaken = stepsTaken + 1;

  if (makeChoice === 1) {
    story.textContent =
      "You walk into the dark path. Glowing eyes stare back at you. Steps taken: " + stepsTaken;

    image.src =
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee";

    choices.innerHTML = `
      <button onclick="makeChoice(4)">Run away</button>
      <button onclick="makeChoice(5)">Approach the eyes</button>
    `;
  }

  if (makeChoice === 2) {
    story.textContent =
      "You follow the river and find fresh water and safety. Steps taken: " + stepsTaken;

    image.src =
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e";

    choices.innerHTML = `
      <button onclick="makeChoice(6)">Build a shelter</button>
      <button onclick="makeChoice(7)">Keep walking</button>
    `;
  }

  if (makeChoice === 3) {
    story.textContent =
      "You climb the hill and see the forest stretching endlessly. Steps taken: " + stepsTaken;

    image.src =
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429";

    choices.innerHTML = `
      <button onclick="makeChoice(8)">Signal for help</button>
      <button onclick="makeChoice(9)">Head toward the mountains</button>
    `;
  }

  if (makeChoice>= 4) {
    story.textContent =
      "Your journey ends here… but the forest will remember you. 🌙 Total steps: " + stepsTaken;

    choices.innerHTML = `<button onclick="location.reload()">Restart Adventure</button>`;
  }
}
