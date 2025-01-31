import {
  createSearchField,
  createSortButtons,
  createLoadingElement,
} from "./ui";
import { createFetchButton } from "./fetchButton";
import { createContainer } from "./container";
import { SortableField } from "./types/types";

export let currentSort: SortableField = "name-asc";
export const getCurrentSort = () => currentSort;
export const setCurrentSort = (newSort: SortableField) => {
  currentSort = newSort;
};

export let showingSaved: boolean = false;
export const setShowingSaved = (value: boolean) => {
  showingSaved = value;
};

export const appContainer = document.getElementById("app")!;
export const searchfield = createSearchField();
export const sortButtons = createSortButtons();
export const villagersContainer = createContainer("villagers");
export const bugsContainer = createContainer("bugs");
export const fishContainer = createContainer("fish");
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
