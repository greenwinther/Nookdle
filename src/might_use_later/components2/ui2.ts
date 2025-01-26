import { Villager } from "../../types/villager";
import { attributes } from "./state";

// ui.ts
// Arrow function to create an input field
export const createInputField = (): HTMLInputElement => {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Guess a villager...";
  input.id = "guess-input";
  return input;
};

// utils.ts
export const createButton = (
  text: string,
  onClick: () => void,
  id?: string // Optional ID
): HTMLButtonElement => {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  if (id) {
    button.id = id; // Set the ID if provided
  }
  return button;
};

// Arrow function to render hints
// ui2.ts
export const renderHints = (hints: string[]): void => {
  console.log("Rendering hints:", hints); // Debugging
  const hintsDiv = document.getElementById("hints");
  if (hintsDiv) {
    hintsDiv.innerHTML = hints.join("<br>");
  } else {
    console.error("Hints div not found!"); // Debugging
  }
};

// Arrow function to render previous guesses
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

    // Function to create a circle
    const createCircle = (text: string, isCorrect: boolean): HTMLDivElement => {
      const circle = document.createElement("div");
      circle.textContent = text;
      circle.classList.add("circle"); // Add the base circle class
      if (isCorrect) {
        circle.classList.add("correct"); // Add the correct class if the attribute is correct
      }
      return circle;
    };

    // Display the guessed villager's name
    const nameCircle = createCircle(guess.name, guess.name === target.name);
    guessContainer.appendChild(nameCircle);

    // Get the attributes for the guessed villager
    const guessedAttributes = attributes(guess);

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
