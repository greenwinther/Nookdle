// Core game logic
// Randomly pick a daily villager
// Check if the user's guess is correct
// Provide clues
import { guessedVillagers } from "../data/mockVillagers";
import {
  createClueBoxes,
  createInputField,
  createDisplayCard,
  createRestartButton,
  clearGameUI,
} from "./ui";
import { getRandomVillager, getClues } from "./randomvillager";
import {
  updateVillagerSuggestions,
  displayGuessedVillager,
  compareVillagerAttributes,
} from "./utils";

export const startGame = () => {
  const selectedVillager = getRandomVillager();
  const clues = getClues(selectedVillager);
  console.log("Selected Villager:", selectedVillager);
  /*   console.log("Clues:", clues); */
  // Call on the functions to get the Ui
  clearGameUI();
  createClueBoxes(clues, null, selectedVillager);
  const displayCard = createDisplayCard();
  createInputField();
  createRestartButton();

  // Fetch variable from the dom to use later
  const submitButton = document.querySelector(
    "#submit-button"
  ) as HTMLButtonElement;
  const inputField = document.querySelector("#guess-input") as HTMLInputElement;
  const resetButton = document.querySelector(
    "#restart-button"
  ) as HTMLButtonElement;

  // When the resetbutton is pressed, I clear the Ui and start the game a new
  resetButton.addEventListener("click", () => {
    startGame();
  });

  // Add event listener to input field
  inputField.addEventListener("input", () => {
    const inputText = inputField.value.trim();
    updateVillagerSuggestions(inputText);
  });

  submitButton.addEventListener("click", () => {
    const guess = inputField.value.trim();
    const guessedVillager = displayGuessedVillager(
      guess,
      displayCard,
      guessedVillagers,
      selectedVillager
    );

    if (guessedVillager !== null) {
      console.log("Guessed Villager:", guessedVillager);
    } else {
      console.log("This villager has already been guessed.");
    }
    // Call the function after a villager is guessed
    if (guessedVillager) {
      compareVillagerAttributes(guessedVillager, selectedVillager);
    }
  });
};
