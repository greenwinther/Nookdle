import { Villager } from "../../types/villager";
import { attributes } from "./state3";
import { mockVillagers } from "../../data/mockVillagers";

// Arrow function to compare the guess with the target villager
export const checkGuess = (
  guess: Villager,
  target: Villager
): { correct: boolean; hints: string[] } => {
  const hints: string[] = [];

  // Check if the guess is valid
  const isValidGuess = mockVillagers.some((v) => v.name === guess.name);
  if (!isValidGuess) {
    return { correct: false, hints: ["Invalid villager name!"] };
  }

  if (guess.name === target.name) {
    return { correct: true, hints: [] };
  }

  // Use the attributes function to get the properties to compare
  const guessAttributes = attributes(guess);
  const targetAttributes = attributes(target);

  // Compare properties and generate hints
  guessAttributes.forEach(({ key, label, value }) => {
    const targetValue = targetAttributes.find(
      (attr) => attr.key === key
    )?.value;
    if (value === targetValue) {
      hints.push(`Correct ${label.toLowerCase()}!`);
    }
  });

  console.log("Generated hints:", hints); // Debugging
  return { correct: false, hints };
};

// Function which renders hints
export const renderHints = (hints: string[]): void => {
  // Debugging
  console.log("Rendering hints:", hints);
  const hintsDiv = document.getElementById("hints");

  // Debugging, Check if the hintsDiv exists
  if (hintsDiv) {
    hintsDiv.innerHTML = hints.join("<br>");
  } else {
    console.error("Hints div not found!");
  }
};

/* export const renderSuggestions = (
  suggestionsDiv: HTMLDivElement,
  filteredVillagers: Villager[]
): HTMLDivElement[] => {
  if (filteredVillagers.length === 0) {
    suggestionsDiv.classList.remove("visible"); // Hide if no suggestions
  } else {
    suggestionsDiv.classList.add("visible"); // Show if there are suggestions
  }

  suggestionsDiv.innerHTML = ""; // Clear previous suggestions

  // Create and return the suggestion items
  return filteredVillagers.map((villager) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.textContent = villager.name;
    suggestionItem.classList.add("suggestion-item"); // Add a class for styling
    suggestionsDiv.appendChild(suggestionItem);
    return suggestionItem; // Return the created suggestion item
  });
}; */

// utils.ts (or any utility file)
/* export const createRestartButton = (onClick: () => void) => {
  if (!document.querySelector("#restart-button")) {
    const resetButton = document.createElement("button");
    resetButton.textContent = "Play Again";
    resetButton.id = "restart-button";
    resetButton.addEventListener("click", onClick); // Call the onClick function when clicked
    document.body.appendChild(resetButton);
  }
}; */

// utils.ts (or any utility file)
/* export const clearGameUI = () => {
  document.querySelector("#hints")?.remove();
  document.querySelector("#previous-guesses")?.remove();
  document.querySelector("#guess-input")?.remove();
  document.querySelector("#restart-button")?.remove();
}; */
