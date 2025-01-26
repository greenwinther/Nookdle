// Helper functions
// Helper functions like random villager selection, string comparison, etc.
import { mockVillagers } from "../../data/mockVillagers";
import { Villager } from "../../types/villager";
import { getClues } from "./randomvillager1";
import { createClueBoxes } from "./ui";

// Function to handle filtering and updating suggestions
export const updateVillagerSuggestions = (inputText: string) => {
  // Getting it from the dom and clearing it
  const suggestionsContainer = document.querySelector(
    "#villager-suggestions"
  ) as HTMLDivElement;
  suggestionsContainer.innerHTML = "";
  // If the input is longer than 0 show me every villager name that starts with my input
  if (inputText.length > 0) {
    const matchingVillagers = mockVillagers.filter((villager) =>
      villager.name.toLowerCase().startsWith(inputText.toLowerCase())
    );
    // If it starts with that input create a box with that villager name
    matchingVillagers.forEach((villager) => {
      const villagerBox = document.createElement("div");
      villagerBox.classList.add("villager-suggestion-box");
      villagerBox.textContent = villager.name;
      // Click the box and it sets the input value from the suggested villager name
      villagerBox.addEventListener("click", () => {
        const inputField = document.querySelector(
          "#guess-input"
        ) as HTMLInputElement;
        inputField.value = villager.name;
        suggestionsContainer.innerHTML = "";
      });

      suggestionsContainer.appendChild(villagerBox);
    });
  }
};

// Function which displays the guesses made
export const displayGuessedVillager = (
  guess: string,
  displayCard: HTMLElement,
  guessedVillagers: Villager[],
  selectedVillager: Villager
): Villager | null => {
  // Find the guessed villager in the mock data
  const guessedVillager = mockVillagers.find(
    (villager) => villager.name.toLowerCase() === guess.toLowerCase()
  );
  const clues = getClues(selectedVillager);
  if (
    guessedVillagers.some((villager) => villager.name === guessedVillager?.name)
  ) {
    return null;
  }

  // Create a new div for the guessed villager information
  const newGuessDiv = document.createElement("div");

  // If the villager name is not found
  if (!guessedVillager) {
    // If no villager found, still render empty clue boxes
    createClueBoxes(clues, null, selectedVillager);
    return null;
  } else {
    newGuessDiv.innerHTML = `
        <p><strong>Guessed Name:</strong> ${guessedVillager.name}</p>
    `;

    // Generate clues dynamically
    createClueBoxes(clues, guessedVillager, selectedVillager);
    guessedVillagers.push(guessedVillager);
  }

  displayCard.appendChild(newGuessDiv);

  return guessedVillager || null;
};

// Function which compares the guessed villagers attributes to the selected villagers attributes
export const compareVillagerAttributes = (
  guessedVillager: Villager,
  selectedVillager: Villager
) => {
  const clues = getClues(selectedVillager);
  // Iterate through the clues and compare attributes
  clues.forEach((clue, index) => {
    const clueBox = document.querySelectorAll(".clue-box")[index];
    const clueValueElement = clueBox.querySelector(
      ".clue-value"
    ) as HTMLParagraphElement;

    if (!clueBox || !clueValueElement) {
      console.error("Clue box or value element not found!");
      return;
    }

    // Get the guessed villager's and selected villager's values for the current clue
    const guessedValue = guessedVillager[clue.key as keyof Villager];
    const selectedValue = clue.value;

    // Display guessed value for this clue
    clueValueElement.textContent = guessedValue as string;

    if (guessedValue === selectedValue) {
      // Correct guess for this clue
      clueBox.classList.add("correct");
      clueBox.classList.remove("incorrect");
    } else {
      // Incorrect guess for this clue
      clueBox.classList.add("incorrect");
      clueBox.classList.remove("correct");
    }
  });
};
