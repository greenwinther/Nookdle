/* export const setupFavoriteButton = (
  button: HTMLButtonElement,
  searchfield: { searchInput: HTMLInputElement },
  updateDisplay: Function,
  currentSort: string,
  showFavorite: boolean
) => {
  button.addEventListener("click", () => {
    showFavorite = !showFavorite;
    // Call the updateDisplay function to update the cards
    // Pass the showingSaved state to filter the items
    updateDisplay(searchfield, currentSort, showFavorite);
  });
}; */

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
