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

  setupAppUI(
    appContainer,
    searchfield,
    sortButtons,
    loading,
    villagersContainer
  );

  const updateDisplay = (
    searchTerm = "",
    sortBy: SortableField = currentSort
  ) => {
    filterVillagers(searchTerm, sortBy);
    updateSortButtons(sortBy);
  };

  try {
    await fetchAllVillagers();
    loading.remove();
    updateDisplay();
  } catch (error) {
    console.error("Error:", error);
    loading.textContent = "Failed to load villagers";
  }

  // A functions which puts a slight delay before displaying the content
  const handleUpdate = () => {
    clearTimeout((handleUpdate as any).timeout);
    (handleUpdate as any).timeout = setTimeout(() => {
      const search = searchfield.searchInput.value;
      updateDisplay(search);
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
      updateDisplay(searchfield.searchInput.value, currentSort);
    }
  });

  searchfield.searchInput.addEventListener("input", handleUpdate);
};
