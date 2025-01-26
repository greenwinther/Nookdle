import { Villager } from "../../types/villager";
import { mockVillagers } from "../../data/mockVillagers";
import { checkGuess, createRestartButton, clearGameUI } from "./utils2";
import { selectRandomVillager } from "./randomVillager2";
import { createSuggestions, SuggestionsElement } from "./suggestions";
import {
  createButton,
  renderHints,
  renderPreviousGuess,
  createInputField,
} from "./ui2";

export const initializeUI = (): void => {
  let targetVillager: Villager;
  let guessedVillagers: Villager[] = []; // Track guessed villagers

  // Create the submit button once
  const submitButton = createButton(
    "Submit Guess",
    () => {
      const input = document.querySelector<HTMLInputElement>("#guess-input");
      const guessName = input?.value.trim() || "";

      // Check if the guess matches a villager's name
      const guessedVillager = mockVillagers.find(
        (v) => v.name.toLowerCase() === guessName.toLowerCase()
      );

      if (!guessedVillager) {
        renderHints(["Villager not found. Try again!"]); // Show an error message
        return; // Exit the function early
      }

      // Check if the villager has already been guessed
      if (guessedVillagers.some((v) => v.name === guessedVillager.name)) {
        renderHints(["You've already guessed this villager. Try another one!"]);
        return; // Exit the function early
      }

      // Add the guessed villager to the list
      guessedVillagers.push(guessedVillager);

      const result = checkGuess(guessedVillager, targetVillager);
      if (result.correct) {
        renderHints(["Congratulations! You guessed the villager!"]);

        // Disable further guesses
        if (input) input.disabled = true; // Disable the input field
        submitButton.disabled = true; // Disable the submit button
        const suggestions =
          document.querySelector<SuggestionsElement>("#suggestions");
        if (suggestions) suggestions.remove(); // Hide the suggestions list

        createRestartButton(() => {
          clearGameUI();
          startGame();
        }); // Show the "Play Again" button
      } else {
        renderHints(result.hints);
      }
      renderPreviousGuess(guessedVillager, targetVillager);

      // Disable the submit button after each guess
      submitButton.disabled = true;

      // Re-render the suggestions list to exclude the guessed villager
      const inputValue = input?.value.trim().toLowerCase() || "";
      const filteredVillagers = mockVillagers.filter(
        (villager) =>
          villager.name.toLowerCase().startsWith(inputValue) &&
          !guessedVillagers.some((v) => v.name === villager.name)
      );
      const suggestions =
        document.querySelector<SuggestionsElement>("#suggestions");
      if (suggestions) {
        suggestions.renderSuggestions(filteredVillagers);
      }

      // Clear the input field after submitting a guess
      if (input) input.value = "";
      if (input) input.focus;
    },
    "submit-button" // Set an ID for the submit button
  );

  // Disable the submit button initially
  submitButton.disabled = true;

  const startGame = () => {
    targetVillager = selectRandomVillager(mockVillagers);
    guessedVillagers = []; // Reset guessed villagers
    console.log("New Target Villager:", targetVillager); // For debugging

    // Clear the UI
    clearGameUI();

    // Reinitialize the UI
    const app = document.getElementById("app");
    if (app) {
      const input = createInputField();

      const hintsDiv = document.createElement("div");
      hintsDiv.id = "hints";

      const previousGuessesDiv = document.createElement("div");
      previousGuessesDiv.id = "previous-guesses";

      // Create the suggestions component
      const suggestions = createSuggestions((name) => {
        if (input) input.value = name; // Set the input value to the selected suggestion
        if (suggestions) suggestions.renderSuggestions([]); // Clear suggestions after selection
        submitButton.click(); // Automatically submit the guess
      });

      // Add an input event listener to enable/disable the submit button
      input.addEventListener("input", () => {
        const inputValue = input.value.trim().toLowerCase();

        // Enable the submit button only if the input matches a villager's name
        const isValidGuess = mockVillagers.some(
          (villager) => villager.name.toLowerCase() === inputValue
        );
        submitButton.disabled = !isValidGuess;

        // Update the suggestions list
        if (inputValue === "") {
          suggestions.renderSuggestions([]); // Hide suggestions if input is empty
        } else {
          // Filter out villagers that have already been guessed
          const filteredVillagers = mockVillagers.filter(
            (villager) =>
              villager.name.toLowerCase().startsWith(inputValue) &&
              !guessedVillagers.some((v) => v.name === villager.name)
          );
          suggestions.renderSuggestions(filteredVillagers);
        }
      });

      // Add Enter key shortcut to submit the guess
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          submitButton.click(); // Trigger the submit button click
        }
      });

      // Append all elements to the app
      app.appendChild(input);
      app.appendChild(suggestions); // Add suggestions below the input
      app.appendChild(submitButton); // Add the submit button
      app.appendChild(hintsDiv);
      app.appendChild(previousGuessesDiv);
    }
  };

  // Start the game for the first time
  startGame();
};
