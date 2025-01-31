import { setupAppUI } from "./ui";
import {
  appContainer,
  searchfield,
  sortButtons,
  villagersContainer,
  bugsContainer,
  fishContainer,
  currentSort,
  showingSaved,
} from "./variable";
import { updateDisplay } from "./updateDisplay";
import { handleSearchUpdate } from "./debouncer";
import { setupButtonEvents } from "./fetchButtonEvent";
import { setupShowSavedVillagersButton } from "./savedVillagers";
import { setupSortButtons } from "./sortButtonEvent";

export const initApp = async () => {
  setupAppUI(
    appContainer,
    searchfield,
    sortButtons,
    villagersContainer,
    bugsContainer,
    fishContainer
  );

  console.log(sortButtons);

  setupButtonEvents();

  setupSortButtons(
    sortButtons,
    searchfield,
    updateDisplay,
    currentSort,
    showingSaved
  );

  setupShowSavedVillagersButton();

  // Handle search input event for searching villagers
  searchfield.searchInput.addEventListener("input", () => {
    handleSearchUpdate(searchfield, updateDisplay, currentSort, showingSaved);
  });
};
