import type { SortableField } from "../types/types";

export let currentSort: SortableField = "name-asc";

export const headerContainer = document.querySelector(
  ".header-container"
) as HTMLElement;
export const mainContainer = document.querySelector(
  ".main-container"
) as HTMLElement;
export const footerContainer = document.querySelector(
  ".footer-container"
) as HTMLElement;
