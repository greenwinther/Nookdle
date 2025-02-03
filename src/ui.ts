import { createSearchField } from "./createElements/createSearchField";

// Appends the main components to the app container
export const setupMainUI = (
  mainContainer: HTMLElement,
  searchfield: ReturnType<typeof createSearchField>,
  sortButtons: HTMLDivElement,
  villagersContainer: HTMLDivElement,
  bugsContainer: HTMLDivElement,
  fishContainer: HTMLDivElement,
  villagersButton: HTMLButtonElement,
  fishButton: HTMLButtonElement,
  bugsButton: HTMLButtonElement
) => {
  mainContainer.append(
    searchfield.container,
    sortButtons,
    villagersContainer,
    bugsContainer,
    fishContainer,
    villagersButton,
    bugsButton,
    fishButton
  );
};

export const setupHeaderUI = (
  headerContainer: HTMLElement,
  favoriteButton: HTMLButtonElement
) => {
  headerContainer.append(favoriteButton);
};
