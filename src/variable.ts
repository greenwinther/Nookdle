import {
  createSearchField,
  createSortButtons,
  createLoadingElement,
} from "./ui";
import { createFetchButton } from "./fetchButton";
import {
  createBugsContainer,
  createFishContainer,
  createVillagersContainer,
} from "./container";
import { SortableField } from "./types/types";

export let currentSort: SortableField = "name-asc";

export const getCurrentSort = () => currentSort;
export const setCurrentSort = (newSort: SortableField) => {
  currentSort = newSort;
};

export const appContainer = document.getElementById("app")!;
export const searchfield = createSearchField();
export const sortButtons = createSortButtons();
export const villagersContainer = createVillagersContainer();
export const bugsContainer = createBugsContainer();
export const fishContainer = createFishContainer();
export const loading = createLoadingElement();
export const villagersButton = createFetchButton(
  appContainer,
  "Load Villagers",
  "fetch-villagers-btn"
);
export const bugsButton = createFetchButton(
  appContainer,
  "Load Bugs",
  "fetch-bugs-btn"
);
export const fishButton = createFetchButton(
  appContainer,
  "Load Fish",
  "fetch-fish-btn"
);
