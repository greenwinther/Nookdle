import {
  fetchAllVillagers,
  fetchAllBugs,
  fetchAllFish,
} from "./scripts/fetchVillagers";
import {
  updateSortButtons,
  filterVillagers,
  filterBugs,
  filterFish,
} from "./utils";
import type { SortableField } from "./types/types";
import { setupAppUI } from "./ui";
import {
  appContainer,
  searchfield,
  sortButtons,
  villagersButton,
  bugsButton,
  fishButton,
  loading,
  villagersContainer,
  bugsContainer,
  fishContainer,
} from "./variable";

export const initApp = async () => {
  let currentSort: SortableField = "name-asc";

  setupAppUI(
    appContainer,
    searchfield,
    sortButtons,
    villagersContainer,
    bugsContainer,
    fishContainer
  );

  const updateDisplay = (
    searchTerm = "",
    sortBy: SortableField = currentSort,
    onlySaved: boolean = false
  ) => {
    // Call the appropriate filter function to populate the grids
    filterBugs(searchTerm, onlySaved); // Should populate the bugs grid
    filterFish(searchTerm, onlySaved); // Should populate the fish grid
    filterVillagers(searchTerm, sortBy, onlySaved); // Should populate the villagers grid

    // Update the sort buttons
    updateSortButtons(sortBy);
  };

  // Fetch villagers only when button is clicked
  villagersButton.addEventListener("click", async () => {
    try {
      appContainer.appendChild(loading);
      await fetchAllVillagers();
      loading.remove();
      updateDisplay();
      bugsContainer.innerHTML = "";
      fishContainer.innerHTML = "";
    } catch (error) {
      console.error("Error:", error);
      loading.textContent = "Failed to load villagers";
    }
  });

  bugsButton.addEventListener("click", async () => {
    try {
      appContainer.appendChild(loading);
      await fetchAllBugs();
      loading.remove();
      updateDisplay();
      villagersContainer.innerHTML = "";
      fishContainer.innerHTML = "";
    } catch (error) {
      console.error("Error:", error);
      loading.textContent = "Failed to load bugs";
    }
  });

  fishButton.addEventListener("click", async () => {
    try {
      appContainer.appendChild(loading);
      console.log(fetchAllFish());
      await fetchAllFish();
      loading.remove();
      updateDisplay();
      villagersContainer.innerHTML = "";
      bugsContainer.innerHTML = "";
    } catch (error) {
      console.error("Error:", error);
      loading.textContent = "Failed to load fish";
    }
  });

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

  let showingSaved = false;
  const showSavedVillagers = document.getElementById("showSavedVillagersBtn");
  // Show only saved villagers
  if (showSavedVillagers) {
    showSavedVillagers.addEventListener("click", () => {
      showingSaved = !showingSaved;
      updateDisplay(searchfield.searchInput.value, currentSort, showingSaved);
    });
  }

  // Handle search input event for searching villagers
  searchfield.searchInput.addEventListener("input", () => {
    const search = searchfield.searchInput.value;
    updateDisplay(search);
  });
};
