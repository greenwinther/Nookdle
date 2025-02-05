import {
  fetchAllVillagers,
  fetchAllBugs,
  fetchAllFish,
} from "../fetchDataEvent/fetchData";
import { mainContainer } from "../../data/dom";

import {
  villagersButton,
  bugsButton,
  fishButton,
} from "../../components/buttons/createButtons";

import { loading } from "../../components/containers/createLoadingElement";
import { createCardsFromFetchedData } from "../../components/cards/createCard";
import {
  villagersContainer,
  fishContainer,
  bugsContainer,
  favoritesContainer,
  checkboxContainer,
  filterContainer,
} from "../../components/containers/createContainers";
import { initializeFilters } from "../../components/checkboxes/checkboxes";
import { filterButton } from "../../components/buttons/createButtons";

let filtersInitialized = false;

export const setupFetchButton = (
  button: HTMLButtonElement,
  fetchFunction: () => Promise<any>,
  errorMessage: string,
  villagersContainer: HTMLDivElement,
  bugsContainer: HTMLDivElement,
  fishContainer: HTMLDivElement,
  favoritesContainer: HTMLDivElement,
  checkboxContainer: HTMLDivElement
) => {
  button.addEventListener("click", async () => {
    try {
      // Clear all containers first
      villagersContainer.innerHTML = "";
      bugsContainer.innerHTML = "";
      fishContainer.innerHTML = "";
      favoritesContainer.innerHTML = "";

      // Show the loading indicator
      mainContainer.appendChild(loading);

      // Fetch the data
      await fetchFunction();

      // Remove the loading indicator
      loading.remove();

      // Append the filterContainer only once
      filterContainer.appendChild(filterButton);
      mainContainer.appendChild(filterContainer);
      // Check which button was clicked, and append the corresponding data to the relevant container
      if (button === villagersButton) {
        createCardsFromFetchedData(villagersContainer, "villager");
        // Initialize filters only once
        if (!filtersInitialized) {
          initializeFilters(checkboxContainer);
          filtersInitialized = true;
        }
      } else if (button === bugsButton) {
        createCardsFromFetchedData(bugsContainer, "bug");
      } else if (button === fishButton) {
        createCardsFromFetchedData(fishContainer, "fish");
      }
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
    villagersContainer,
    bugsContainer,
    fishContainer,
    favoritesContainer,
    checkboxContainer
  );
  setupFetchButton(
    bugsButton,
    fetchAllBugs,
    "Failed to load bugs",
    villagersContainer,
    bugsContainer,
    fishContainer,
    favoritesContainer,
    checkboxContainer
  );
  setupFetchButton(
    fishButton,
    fetchAllFish,
    "Failed to load fish",
    villagersContainer,
    bugsContainer,
    fishContainer,
    favoritesContainer,
    checkboxContainer
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
