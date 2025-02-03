import { createSearchField } from "./createElements/createSearchField";

// Appends the main components to the app container
export const setupMainUI = (
  mainContainer: HTMLElement,
  searchfield: ReturnType<typeof createSearchField>,
  sortButtons: HTMLDivElement,
  cardContainer: HTMLDivElement,
  fetchContainer: HTMLDivElement
) => {
  mainContainer.append(
    searchfield.container,
    sortButtons,
    cardContainer,
    fetchContainer
  );
};

export const setupHeaderUI = (
  headerContainer: HTMLElement,
  favoriteButton: HTMLButtonElement
) => {
  headerContainer.append(favoriteButton);
};
