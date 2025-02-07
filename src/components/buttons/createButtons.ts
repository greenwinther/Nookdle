import {
  myFavoritebtnContainer,
  fetchContainer,
  searchContainer,
} from "../containers/createContainers";
import { filterContainer } from "../containers/createContainers";

export const createFetchButton = (label: string, className: string) => {
  const button = document.createElement("button");
  button.textContent = label;
  button.classList.add(className);
  return button;
};

export const villagersButton = createFetchButton(
  "Villagers",
  "fetch-villagers-btn"
);
export const bugsButton = createFetchButton("Bugs", "fetch-bugs-btn");
export const fishButton = createFetchButton("Fish", "fetch-fish-btn");
export const myFavoriteButton = createFetchButton("❤️", "my-favorite-btn");
export const submitSearchButton = createFetchButton(
  "Search",
  "submit-search-button"
);
export const filterButton = createFetchButton("Filter", "filter-btn");
fetchContainer.appendChild(villagersButton);
fetchContainer.appendChild(bugsButton);
fetchContainer.appendChild(fishButton);
myFavoritebtnContainer.appendChild(myFavoriteButton);
searchContainer.appendChild(submitSearchButton);
filterContainer.appendChild(filterButton);
