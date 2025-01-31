import { showingSaved, searchfield, currentSort } from "./variable";
import { handleSearchUpdate } from "./debouncer";
import { updateDisplay } from "./updateDisplay";
import { setShowingSaved } from "./variable";

// Function to set up the show saved villagers button event
export const setupShowSavedVillagersButton = () => {
  const showSavedVillagers = document.getElementById("showSavedVillagersBtn");

  if (showSavedVillagers) {
    showSavedVillagers.addEventListener("click", () => {
      // Use the setter function to update showingSaved
      setShowingSaved(!showingSaved);
      handleSearchUpdate(searchfield, updateDisplay, currentSort, showingSaved);
    });
  }
};
