import {
  fetchAllVillagers,
  fetchAllBugs,
  fetchAllFish,
} from "./scripts/fetchVillagers";
import { updateSortButtons } from "./utils";
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
  getCurrentSort,
  setCurrentSort,
} from "./variable";
import { updateDisplay } from "./updateDisplay";
import { currentSort } from "./variable";
import { handleSearchUpdate } from "./debouncer";

export const initApp = async () => {
  setupAppUI(
    appContainer,
    searchfield,
    sortButtons,
    villagersContainer,
    bugsContainer,
    fishContainer
  );

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

  let showingSaved = false;
  const showSavedVillagers = document.getElementById("showSavedVillagersBtn");
  // Show only saved villagers
  if (showSavedVillagers) {
    showSavedVillagers.addEventListener("click", () => {
      showingSaved = !showingSaved;
      handleSearchUpdate(searchfield, updateDisplay, currentSort, showingSaved);
    });
  }

  // Handle search input event for searching villagers
  searchfield.searchInput.addEventListener("input", () => {
    handleSearchUpdate(searchfield, updateDisplay, currentSort, showingSaved);
  });
};
