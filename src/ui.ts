import {
  bugsContainer,
  fishContainer,
  villagersContainer,
  cardContainer,
} from "./createElements/createContainer";
import { createSearchField } from "./createElements/createSearchField";

export const setupCardUI = (
  cardContainer: HTMLDivElement,
  villagersContainer: HTMLDivElement,
  bugsContainer: HTMLDivElement,
  fishContainer: HTMLDivElement
) => {
  cardContainer.append(villagersContainer, bugsContainer, fishContainer);
};

setupCardUI(cardContainer, villagersContainer, bugsContainer, fishContainer);

// Appends the main components to the app container
export const setupMainUI = (
  mainContainer: HTMLElement,
  searchfield: ReturnType<typeof createSearchField>,
  sortButtons: HTMLDivElement,
  fetchContainer: HTMLDivElement,
  cardContainer: HTMLDivElement
) => {
  mainContainer.append(
    searchfield.container,
    sortButtons,
    fetchContainer,
    cardContainer
  );
};

export const setupHeaderUI = (
  headerContainer: HTMLElement,
  favoriteButton: HTMLButtonElement
) => {
  headerContainer.append(favoriteButton);
};
