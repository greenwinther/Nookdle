import { Villager } from "../../types/villager";
import { attributes } from "./state3";

// Function which create an input field
export const createInputField = (): HTMLInputElement => {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Guess a villager...";
  input.id = "guess-input";
  return input;
};

// Function which dynamically creates a button
export const createButton = (text: string, id?: string): HTMLButtonElement => {
  const button = document.createElement("button");
  button.textContent = text;
  // Set the ID if provided
  if (id) {
    button.id = id;
  }
  return button;
};

// Create the hints container
export const createHintsDiv = (): HTMLDivElement => {
  const hintsDiv = document.createElement("div");
  hintsDiv.id = "hints";
  return hintsDiv;
};

// Function which creates the circles
export const createCircle = (
  text: string,
  isCorrect: boolean
): HTMLDivElement => {
  const circle = document.createElement("div");
  circle.textContent = text;
  // Add the base circle class
  circle.classList.add("circle");
  if (isCorrect) {
    // Add the correct class if the attribute is correct
    circle.classList.add("correct");
  }
  return circle;
};

// Function to render previous guesses
export const renderPreviousGuess = (
  guess: Villager,
  target: Villager
): void => {
  const previousGuessesDiv = document.getElementById("previous-guesses");
  if (previousGuessesDiv) {
    // Create a container for the guess
    const guessContainer = document.createElement("div");
    guessContainer.classList.add("guess-container");
    guessContainer.textContent = `Guessed: ${guess.name}`;

    // Display the guessed villager's name
    const nameCircle = createCircle(guess.name, guess.name === target.name);
    guessContainer.appendChild(nameCircle);

    // Get the attributes for the guessed villager
    const guessedAttributes = attributes(guess);

    // I compare the guess with the target, it sets the value of guess,
    // if its the same as target, isCorrect becomes true which changes circles classList
    guessedAttributes.forEach((attr) => {
      const isCorrect =
        guess[attr.key as keyof Villager] ===
        target[attr.key as keyof Villager];
      const circle = createCircle(attr.value, isCorrect);
      guessContainer.appendChild(circle);
    });

    // Add the guess container to the previous guesses div
    previousGuessesDiv.appendChild(guessContainer);
  }
};

/* // Create the suggestions container
export const createSuggestionsDiv = (): HTMLDivElement => {
  const suggestionsDiv = document.createElement("div");
  suggestionsDiv.id = "suggestions";
  return suggestionsDiv;
}; */

/* // Create the previous guesses container
export const createPreviousGuessesDiv = (): HTMLDivElement => {
  const previousGuessesDiv = document.createElement("div");
  previousGuessesDiv.id = "previous-guesses";
  return previousGuessesDiv;
}; */
