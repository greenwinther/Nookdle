import { handleSearchUpdate } from "./debouncer";
import { setShowingSaved } from "../data/variable";

export const setupFavoriteButton = (
  button: HTMLButtonElement,
  searchfield: { searchInput: HTMLInputElement },
  updateDisplay: Function,
  currentSort: string,
  showingSaved: boolean
) => {
  button.addEventListener("click", () => {
    setShowingSaved(!showingSaved);
    handleSearchUpdate(searchfield, updateDisplay, currentSort, showingSaved);
  });
};

/* 
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
