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
  filterContainer,
} from "../../components/containers/createContainers";
import { initializeFilters } from "../../components/checkboxes/checkboxes";
import { filterVillagers } from "../../components/checkboxes/checkboxes";

let filtersInitialized = false;

export const setupFetchButton = (
  button: HTMLButtonElement,
  fetchFunction: () => Promise<any>,
  errorMessage: string,
  villagersContainer: HTMLDivElement,
  bugsContainer: HTMLDivElement,
  fishContainer: HTMLDivElement,
  favoritesContainer: HTMLDivElement
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
      mainContainer.appendChild(filterContainer);
      // Check which button was clicked, and append the corresponding data to the relevant container
      if (button === villagersButton) {
        createCardsFromFetchedData(villagersContainer, "villager");
        // Initialize filters only once
        if (!filtersInitialized) {
          initializeFilters();
          filtersInitialized = true;
        }
      } else if (button === bugsButton) {
        createCardsFromFetchedData(bugsContainer, "bug");
      } else if (button === fishButton) {
        createCardsFromFetchedData(fishContainer, "fish");
      }

      filterVillagers();
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
    favoritesContainer
  );
  setupFetchButton(
    bugsButton,
    fetchAllBugs,
    "Failed to load bugs",
    villagersContainer,
    bugsContainer,
    fishContainer,
    favoritesContainer
  );
  setupFetchButton(
    fishButton,
    fetchAllFish,
    "Failed to load fish",
    villagersContainer,
    bugsContainer,
    fishContainer,
    favoritesContainer
  );
};
