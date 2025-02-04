import {
  bugsContainer,
  fishContainer,
  villagersContainer,
  cardContainer,
} from "./createElements/createContainer";

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
  searchContainer: HTMLDivElement,
  sortButtons: HTMLDivElement,
  fetchContainer: HTMLDivElement,
  cardContainer: HTMLDivElement
) => {
  mainContainer.append(
    searchContainer,
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
