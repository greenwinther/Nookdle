import {
  renderHints,
  checkGuess,
  /*   createRestartButton,
  clearGameUI,
  renderSuggestions, */
} from "./utils3";
import { mockVillagers } from "../../data/mockVillagers";
import { targetVillager, guessedVillagers } from "./state3";
/* import { gameStart } from "./gamelogic3"; */
import { renderPreviousGuess } from "./ui3";

export const handleSubmit = (): void => {
  const input = document.querySelector<HTMLInputElement>("#guess-input");
  console.log("Input Value:", input?.value); // Debugging
  const guessName = input?.value.trim() || "";

  // Debugging
  if (!input) {
    console.error("Input element not found!");
    return;
  }

  // Check if the guess matches a villager's name
  const guessedVillager = mockVillagers.find(
    (v) => v.name.toLowerCase() === guessName.toLowerCase()
  );

  if (!guessedVillager) {
    console.log("Villager not found:", guessName); // Debugging
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
    const suggestions = document.querySelector<HTMLDivElement>("#suggestions");
    if (suggestions) suggestions.remove(); // Hide the suggestions list

    /*     createRestartButton(() => {
      clearGameUI();
      gameStart();
    }); */ // Show the "Play Again" button
  } else {
    renderHints(result.hints);
  }
  renderPreviousGuess(guessedVillager, targetVillager);

  // Disable the submit button after each guess
  const submitButton =
    document.querySelector<HTMLButtonElement>("#submit-button");
  if (submitButton) submitButton.disabled = true;

  // Re-render the suggestions list to exclude the guessed villager
  /* const inputValue = input?.value.trim().toLowerCase() || ""; */
  /* const filteredVillagers = mockVillagers.filter(
    (villager) =>
      villager.name.toLowerCase().startsWith(inputValue) &&
      !guessedVillagers.some((v) => v.name === villager.name)
  ); */
  /*   const suggestions = document.querySelector<HTMLDivElement>("#suggestions");
  if (suggestions) {
    renderSuggestions(suggestions, filteredVillagers);
  } */

  // Clear the input field after submitting a guess
  if (input) input.value = "";
  if (input) input.focus();
};
