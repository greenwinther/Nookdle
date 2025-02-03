import { showingSaved, searchfield, currentSort } from "../data/variable";
import { handleSearchUpdate } from "./debouncer";
import { updateDisplay } from "../updateDisplay";
import { setShowingSaved } from "../data/variable";

// Function to set up the show saved villagers button event
export const setupShowSavedVillagersButton = () => {
  const showSavedVillagers = document.getElementById("showSavedVillagersBtn");

  if (showSavedVillagers) {
    showSavedVillagers.addEventListener("click", () => {
      setShowingSaved(!showingSaved);
      handleSearchUpdate(searchfield, updateDisplay, currentSort, showingSaved);
    });
  }
};
