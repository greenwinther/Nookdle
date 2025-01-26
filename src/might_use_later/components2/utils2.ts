import { Villager } from "../../types/villager";
import { attributes } from "./state";

// Arrow function to compare the guess with the target villager
export const checkGuess = (
  guess: Villager,
  target: Villager
): { correct: boolean; hints: string[] } => {
  const hints: string[] = [];

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

// utils.ts (or any utility file)
export const createRestartButton = (onClick: () => void) => {
  if (!document.querySelector("#restart-button")) {
    const resetButton = document.createElement("button");
    resetButton.textContent = "Play Again";
    resetButton.id = "restart-button";
    resetButton.addEventListener("click", onClick); // Call the onClick function when clicked
    document.body.appendChild(resetButton);
  }
};

// utils.ts (or any utility file)
export const clearGameUI = () => {
  document.querySelector("#hints")?.remove();
  document.querySelector("#previous-guesses")?.remove();
  document.querySelector("#guess-input")?.remove();
  document.querySelector("#suggestions")?.remove();
  document.querySelector("#restart-button")?.remove();
};
