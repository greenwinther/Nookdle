// Functions for rendering UI
// Display cards for guesses or correct answers
// Render the current clue
// Update the score or stats

import { Villager } from "../types/villager";

// Function that creates the clue boxes
export const createClueBoxes = (
  clues: { key: string; label: string; value: string }[],
  guessedVillager: Villager | null,
  selectedVillager: Villager
) => {
  const gameContainer = document.createElement("div");
  gameContainer.id = "game-container";

  // Create a container for the villager name and clue boxes
  const villagerContainer = document.createElement("div");
  villagerContainer.classList.add("villager-container");

  // Villager Name Section
  const villagerNameDiv = document.createElement("div");
  villagerNameDiv.classList.add("villager-name");
  villagerNameDiv.textContent = guessedVillager
    ? guessedVillager.name
    : "Unknown Villager";

  villagerContainer.appendChild(villagerNameDiv);

  // Clue Boxes Section
  const cluesContainer = document.createElement("div");
  cluesContainer.classList.add("clues-container");

  clues.forEach((clue) => {
    const clueBox = document.createElement("div");
    clueBox.classList.add("clue-box");

    // Add the clue label and value
    clueBox.innerHTML = `
    <p>${clue.label}</p>
    <p class="clue-value ${
      guessedVillager &&
      guessedVillager[clue.key as keyof Villager] ===
        selectedVillager[clue.key as keyof Villager]
        ? "correct"
        : "incorrect"
    }">
      ${guessedVillager ? guessedVillager[clue.key as keyof Villager] : "?"}
    </p>
  `;

    cluesContainer.appendChild(clueBox);
  });

  // Append the clues container to the villager container
  villagerContainer.appendChild(cluesContainer);

  // Append the entire villager container to the game container
  gameContainer.appendChild(villagerContainer);

  document.body.appendChild(gameContainer);
};

// Function that creates the input field, submit button and the villager suggestion
export const createInputField = () => {
  // Container for everything
  const inputContainer = document.createElement("div");
  inputContainer.id = "input-container";
  document.body.appendChild(inputContainer);
  // Suggestions container
  const suggestionsContainer = document.createElement("div");
  suggestionsContainer.id = "villager-suggestions";
  inputContainer.appendChild(suggestionsContainer);
  // Create the input field for guessing
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Enter your guess here...";
  inputField.id = "guess-input";
  inputContainer.appendChild(inputField);
  // Create the submit button
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit Guess";
  submitButton.id = "submit-button";
  inputContainer.appendChild(submitButton);
};

// Function that creates the display card
export const createDisplayCard = () => {
  const displayCard = document.createElement("div");
  displayCard.id = "display-card";
  document.body.appendChild(displayCard);
  return displayCard; // Return it for use in the game logic
};

// Function that creates the restart button
export const createRestartButton = () => {
  if (!document.querySelector("#restart-button")) {
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Game";
    resetButton.id = "restart-button";
    document.body.appendChild(resetButton);
  }
};

// Function that clears the UI (game container, display card and input-container)
export const clearGameUI = () => {
  document.querySelector("#game-container")?.remove();
  document.querySelector("#display-card")?.remove();
  document.querySelector("#input-container")?.remove();
  document.querySelector("#restart-button")?.remove();
};
