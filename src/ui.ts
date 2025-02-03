import { createSearchField } from "./createElements/createSearchField";

// Appends the main components to the app container
export const setupAppUI = (
  appContainer: HTMLElement,
  searchfield: ReturnType<typeof createSearchField>,
  sortButtons: HTMLDivElement,
  villagersContainer: HTMLDivElement,
  bugsContainer: HTMLDivElement,
  fishContainer: HTMLDivElement
) => {
  appContainer.append(
    searchfield.container,
    sortButtons,
    villagersContainer,
    bugsContainer,
    fishContainer
  );
};
