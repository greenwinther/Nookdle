import { createLoadingElement } from "../createElements/createLoadingElement";
import { createContainer } from "../createElements/createContainer";
import { SortableField } from "../types/types";
import { createSearchField } from "../createElements/createSearchField";
import { createSortButtons } from "../createElements/createSortButtons";
import type {
  NookipediaBugs,
  NookipediaFish,
  NookipediaVillager,
} from "../types/types";

export let currentSort: SortableField = "name-asc";
/* export const getCurrentSort = () => currentSort;
export const setCurrentSort = (newSort: SortableField) => {
  currentSort = newSort;
}; */

export let showingSaved: boolean = false;
export const setShowingSaved = (value: boolean) => {
  showingSaved = value;
};

export const savedVillagers: NookipediaVillager[] = [];
export const savedFish: NookipediaFish[] = [];
export const savedBugs: NookipediaBugs[] = [];

export const headerContainer = document.querySelector(
  ".header-container"
) as HTMLElement;
export const mainContainer = document.querySelector(
  ".main-container"
) as HTMLElement;
export const footerContainer = document.querySelector(
  ".footer-container"
) as HTMLElement;
export const appContainer = document.getElementById("app") as HTMLDivElement;
export const searchfield = createSearchField();
export const sortButtons = createSortButtons();
export const villagersContainer = createContainer("villagers");
export const bugsContainer = createContainer("bugs");
export const fishContainer = createContainer("fish");
export const loading = createLoadingElement();
