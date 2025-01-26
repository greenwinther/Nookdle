import { mockVillagers } from "../../data/mockVillagers";
/* import { clearGameUI, renderSuggestions } from "./utils3"; */
import { selectRandomVillager } from "./randomVillager3";
import {
  createButton,
  createInputField,
  createHintsDiv,
  /*   createPreviousGuessesDiv,
  createSuggestionsDiv, */
} from "./ui3";
import { setTargetVillager, guessedVillagers } from "./state3";

export const gameStart = () => {
  // Reset the target villager and guessed villagers
  const newTargetVillager = selectRandomVillager(mockVillagers);
  setTargetVillager(newTargetVillager); // Use the setter function
  guessedVillagers.length = 0; // Clear the guessed villagers array

  console.log("New Target Villager:", newTargetVillager); // For debugging
  console.log("Mock Villagers:", mockVillagers); // Debugging
  // Clear the UI
  // clearGameUI();

  // Reinitialize the UI
  const app = document.getElementById("app");
  if (app) {
    // Create UI components
    const input = createInputField();
    console.log("Input Element:", input); // Debugging
    const hintsDiv = createHintsDiv();
    // const previousGuessesDiv = createPreviousGuessesDiv();
    const submitButton = createButton("Submit Guess", "submit-button");

    // Create the suggestions container
    // const suggestionsDiv = createSuggestionsDiv();
    // app.appendChild(suggestionsDiv);

    // Add an input event listener to enable/disable the submit button
    /*     input.addEventListener("input", () => {
      const inputValue = input.value.trim().toLowerCase();

      // Enable the submit button only if the input matches a villager's name
      const isValidGuess = mockVillagers.some(
        (villager) => villager.name.toLowerCase() === inputValue
      );
      submitButton.disabled = !isValidGuess;

      // Update the suggestions list
      if (inputValue === "") {
        renderSuggestions(suggestionsDiv, []); // Hide suggestions if input is empty
      } else {
        // Filter out villagers that have already been guessed
        const filteredVillagers = mockVillagers.filter(
          (villager) =>
            villager.name.toLowerCase().startsWith(inputValue) &&
            !guessedVillagers.some((v) => v.name === villager.name)
        );
        renderSuggestions(suggestionsDiv, filteredVillagers);
      }
    }); */

    // Add Enter key shortcut to submit the guess
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        submitButton.click(); // Trigger the submit button click
      }
    });

    // Append all elements to the app
    app.appendChild(input);
    app.appendChild(submitButton); // Add the submit button
    app.appendChild(hintsDiv);
    // app.appendChild(previousGuessesDiv);
  }
};
