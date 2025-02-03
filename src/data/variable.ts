import { SortableField } from "../types/types";
import type {
  NookipediaBugs,
  NookipediaFish,
  NookipediaVillager,
} from "../types/types";

export let currentSort: SortableField = "name-asc";

export let showFavorite: boolean = false;

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
