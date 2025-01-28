import { fetchAllVillagers } from "./scripts/fetchVillagers";
import { updateSortButtons, filterVillagers } from "./utils";
import type { SortableField } from "./types/villager";
import {
  createSearchField,
  createSortButtons,
  createVillagersContainer,
  createLoadingElement,
  setupAppUI,
} from "./ui";

export const initApp = async () => {
  const appContainer = document.getElementById("app")!;

  const searchfield = createSearchField();
  const sortButtons = createSortButtons();
  const villagersContainer = createVillagersContainer();
  const loading = createLoadingElement();

  let currentSort: SortableField = "name-asc";
  let showingSaved = false;

  setupAppUI(
    appContainer,
    searchfield,
    sortButtons,
    loading,
    villagersContainer
  );

  const updateDisplay = (
    searchTerm = "",
    sortBy: SortableField = currentSort,
    onlySaved: boolean = false
  ) => {
    filterVillagers(searchTerm, sortBy, onlySaved);
    updateSortButtons(sortBy);
  };

  try {
    await fetchAllVillagers();
    loading.remove();
    updateDisplay("", currentSort);
  } catch (error) {
    console.error("Error:", error);
    loading.textContent = "Failed to load villagers";
  }

  // A function which handles search input updates with debounce
  // If I type Ace real quick I dont want it to search on A then AC then ACE.
  // This gives it a slight delay after I make an input
  const handleUpdate = () => {
    clearTimeout((handleUpdate as any).timeout);
    (handleUpdate as any).timeout = setTimeout(() => {
      const search = searchfield.searchInput.value;
      updateDisplay(search, currentSort, showingSaved);
    }, 50);
  };

  sortButtons.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("sort-button")) {
      const sortKey = target.dataset.sortKey!;

      const isActive = target.classList.contains("active");
      let currentDirection = "asc";
      if (isActive) {
        currentDirection = target.dataset.direction === "asc" ? "desc" : "asc";
      }
      currentSort = `${sortKey}-${currentDirection}` as SortableField;
      updateSortButtons(currentSort);
      updateDisplay(searchfield.searchInput.value, currentSort, showingSaved);
    }
  });

  const showSavedVillagers = document.getElementById("showSavedVillagersBtn");
  // Show only saved villagers
  if (showSavedVillagers) {
    showSavedVillagers.addEventListener("click", () => {
      showingSaved = !showingSaved;
      updateDisplay(searchfield.searchInput.value, currentSort, showingSaved);
    });
  }

  // Handle search input event for searching villagers
  searchfield.searchInput.addEventListener("input", handleUpdate);
};
