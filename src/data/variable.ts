import { createLoadingElement } from "../createElements/createLoadingElement";
import { SortableField } from "../types/types";
import { createSearchField } from "../createElements/createSearchField";
import { createSortButtons } from "../createElements/createSortButtons";
import type {
  NookipediaBugs,
  NookipediaFish,
  NookipediaVillager,
} from "../types/types";
import { createFavoriteButton } from "../createElements/createFavoriteButton";

export let currentSort: SortableField = "name-asc";

export let onlySaved: boolean = false;

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
export const searchfield = createSearchField();
export const sortButtons = createSortButtons();
export const loading = createLoadingElement();
export const favoriteButton = createFavoriteButton();
