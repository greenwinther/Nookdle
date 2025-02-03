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
} from "./data/variable";
import { updateDisplay } from "./updateDisplay";
import { handleSearchUpdate } from "./events/debouncer";
import { setupButtonEvents } from "./events/fetchButtonEvent";
import { setupShowSavedVillagersButton } from "./events/savedVillagers";
import { setupSortButtons } from "./events/sortButtonEvent";

export const initApp = async () => {
  setupAppUI(
    appContainer,
    searchfield,
    sortButtons,
    villagersContainer,
    bugsContainer,
    fishContainer
  );

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
