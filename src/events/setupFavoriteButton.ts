export const setupFavoriteButton = (
  button: HTMLButtonElement,
  searchfield: { searchInput: HTMLInputElement },
  updateDisplay: Function,
  currentSort: string,
  onlySaved: boolean
) => {
  button.addEventListener("click", () => {
    onlySaved = !onlySaved;
    // Call the updateDisplay function to update the cards
    // Pass the showingSaved state to filter the items
    updateDisplay(searchfield, currentSort, onlySaved);
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
