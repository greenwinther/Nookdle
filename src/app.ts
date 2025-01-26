import { fetchVillagers } from "./scripts/fetchVillagers";
import { createSearchControls, createVillagerCard } from "./domUtils";
import type { NookipediaCharacter } from "./types/villager";

export const initApp = async () => {
  const appContainer = document.getElementById("app")!;

  // Create search and filter controls
  const controls = createSearchControls();
  const villagersContainer = document.createElement("div");
  villagersContainer.className = "villagers-grid";

  // Create loading indicator
  const loading = document.createElement("div");
  loading.className = "loading";
  loading.textContent = "Loading villagers...";
  loading.style.display = "none";

  // Assemble the UI
  appContainer.append(controls.container, loading, villagersContainer);

  // Add event listeners
  let currentSearch = "";
  let currentSort: keyof NookipediaCharacter = "name";

  const performSearch = debounce(async () => {
    try {
      loading.style.display = "block";
      villagersContainer.innerHTML = "";

      const villagers = await fetchVillagers(currentSearch, currentSort);

      villagers.forEach((villager) => {
        villagersContainer.appendChild(createVillagerCard(villager));
      });
    } catch (error) {
      console.error("Error:", error);
      villagersContainer.innerHTML = `<div class="error">Failed to load villagers</div>`;
    } finally {
      loading.style.display = "none";
    }
  }, 500);

  controls.searchInput.addEventListener("input", (e) => {
    currentSearch = (e.target as HTMLInputElement).value;
    performSearch();
  });

  controls.sortSelect.addEventListener("change", (e) => {
    currentSort = (e.target as HTMLSelectElement)
      .value as keyof NookipediaCharacter;
    performSearch();
  });

  // Initial load
  performSearch();
};

// Debounce function to limit API calls
const debounce = (fn: Function, delay: number) => {
  let timeoutId: number;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
