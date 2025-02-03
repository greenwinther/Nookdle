import { handleSearchUpdate } from "./debouncer";

let showingSaved: boolean = false;

export const setupFavoriteButton = (
  button: HTMLButtonElement,
  searchfield: { searchInput: HTMLInputElement },
  updateDisplay: Function,
  currentSort: string,
  showingSaved: boolean
) => {
  button.addEventListener("click", () => {
    // Toggle the showingSaved state

    // Call the updateDisplay function to update the cards
    // Pass the showingSaved state to filter the items
    handleSearchUpdate(searchfield, updateDisplay, currentSort, !showingSaved);
  });
};

/* Old function
// Function to set up the show saved villagers button event
export const setupFavoriteButton = () => {
  const showSavedVillagers = document.getElementById("showSavedVillagersBtn");

  if (showSavedVillagers) {
    showSavedVillagers.addEventListener("click", () => {
      setShowingSaved(!showingSaved);
      handleSearchUpdate(searchfield, updateDisplay, currentSort, showingSaved);
    });
  }
}; */
