import { updateSortButtons } from "./utils";
import type { SortableField } from "./types/types";
import { setupAppUI } from "./ui";
import {
  appContainer,
  searchfield,
  sortButtons,
  villagersContainer,
  bugsContainer,
  fishContainer,
  getCurrentSort,
  setCurrentSort,
  currentSort,
  showingSaved,
} from "./variable";
import { updateDisplay } from "./updateDisplay";
import { handleSearchUpdate } from "./debouncer";
import { setupButtonEvents } from "./fetchButtonEvent";
import { setupShowSavedVillagersButton } from "./savedVillagers";

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

  sortButtons.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("sort-button")) {
      const sortKey = target.dataset.sortKey!;

      const isActive = target.classList.contains("active");
      let currentDirection = "asc";
      if (isActive) {
        currentDirection = target.dataset.direction === "asc" ? "desc" : "asc";
      }
      setCurrentSort(`${sortKey}-${currentDirection}` as SortableField);
      updateSortButtons(getCurrentSort());
      handleSearchUpdate(searchfield, updateDisplay, currentSort, showingSaved);
    }
  });

  setupShowSavedVillagersButton();

  // Handle search input event for searching villagers
  searchfield.searchInput.addEventListener("input", () => {
    handleSearchUpdate(searchfield, updateDisplay, currentSort, showingSaved);
  });
};
