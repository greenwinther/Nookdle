import { createButton } from "./ui3";
import { gameStart } from "./gamelogic3";
import { handleSubmit } from "./submitHandler";

export const initializeUI = (): void => {
  // Create the submit button
  const submitButton = createButton("Submit Guess", "submit-button");
  console.log("Submit Button:", submitButton); // Debugging

  // Add the click event listener to the submit button
  submitButton.addEventListener("click", handleSubmit);

  // Disable the submit button initially
  submitButton.disabled = true;

  // Start the game for the first time
  gameStart();
};
