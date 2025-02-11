import {
  bugsContainer,
  fishContainer,
  villagersContainer,
  cardContainer,
} from "../components/containers/createContainers";

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
  fetchContainer: HTMLDivElement,
  searchContainer: HTMLDivElement,
  cardContainer: HTMLDivElement
) => {
  mainContainer.append(fetchContainer, searchContainer, cardContainer);
};

export const setupHeaderUI = (
  headerContainer: HTMLElement,
  myFavoritebtnContainer: HTMLDivElement
) => {
  headerContainer.append(myFavoritebtnContainer);
};
