import {
  fetchAllVillagers,
  fetchAllBugs,
  fetchAllFish,
} from "../scripts/fetchVillagers";
import {
  searchfield,
  loading,
  currentSort,
  onlySaved,
  mainContainer,
} from "../data/variable";
import {
  updateBugsDisplay,
  updateFishDisplay,
  updateVillagerDisplay,
} from "../updateDisplay";
import {
  villagersButton,
  bugsButton,
  fishButton,
} from "../createElements/createFetchButton";

// Fetch villagers only when button is clicked
export const setupVillagersButton = () => {
  villagersButton.addEventListener("click", async () => {
    try {
      mainContainer.appendChild(loading);
      await fetchAllVillagers();
      loading.remove();
      updateVillagerDisplay(
        searchfield.searchInput.value,
        currentSort,
        onlySaved
      );
    } catch (error) {
      console.error("Error:", error);
      loading.textContent = "Failed to load villagers";
    }
  });
};

// Fetch bugs only when button is clicked
export const setupBugsButton = () => {
  bugsButton.addEventListener("click", async () => {
    try {
      mainContainer.appendChild(loading);
      await fetchAllBugs();
      loading.remove();
      updateBugsDisplay(searchfield.searchInput.value, onlySaved);
    } catch (error) {
      console.error("Error:", error);
      loading.textContent = "Failed to load bugs";
    }
  });
};

// Fetch fish only when button is clicked
export const setupFishButton = () => {
  fishButton.addEventListener("click", async () => {
    try {
      mainContainer.appendChild(loading);
      await fetchAllFish();
      loading.remove();
      updateFishDisplay(searchfield.searchInput.value, onlySaved);
    } catch (error) {
      console.error("Error:", error);
      loading.textContent = "Failed to load fish";
    }
  });
};

// Call the functions to set up the event listeners
export const setupButtonEvents = () => {
  setupVillagersButton();
  setupBugsButton();
  setupFishButton();
};
