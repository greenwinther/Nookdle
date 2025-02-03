import {
  fetchAllVillagers,
  fetchAllBugs,
  fetchAllFish,
} from "../scripts/fetchVillagers";
import { mainContainer } from "../data/dom";

import {
  villagersButton,
  bugsButton,
  fishButton,
} from "../createElements/createFetchButton";

import { loading } from "../createElements/createLoadingElement";
import { createCardsFromFetchedData } from "../createElements/createCard";
import {
  villagersContainer,
  fishContainer,
  bugsContainer,
} from "../createElements/createContainer";

export const setupFetchButton = (
  button: HTMLButtonElement,
  fetchFunction: () => Promise<any>,
  errorMessage: string,
  cardContainer: HTMLDivElement
) => {
  button.addEventListener("click", async () => {
    try {
      cardContainer.innerHTML = "";
      mainContainer.appendChild(loading);
      await fetchFunction();
      loading.remove();
      createCardsFromFetchedData();
    } catch (error) {
      console.error("Error:", error);
      loading.textContent = errorMessage;
    }
  });
};

// Set up all buttons dynamically
export const setupButtonEvents = () => {
  setupFetchButton(
    villagersButton,
    fetchAllVillagers,
    "Failed to load villagers",
    villagersContainer
  );
  setupFetchButton(
    bugsButton,
    fetchAllBugs,
    "Failed to load bugs",
    bugsContainer
  );
  setupFetchButton(
    fishButton,
    fetchAllFish,
    "Failed to load fish",
    fishContainer
  );
};

/* // Fetch villagers only when button is clicked
export const setupVillagersButton = () => {
  villagersButton.addEventListener("click", async () => {
    try {
      mainContainer.appendChild(loading);
      await fetchAllVillagers();
      loading.remove();
      updateVillagerDisplay(
        searchfield.searchInput.value,
        currentSort,
        showFavorite
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
      updateBugsDisplay(searchfield.searchInput.value, showFavorite);
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
      updateFishDisplay(searchfield.searchInput.value, showFavorite);
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
}; */
