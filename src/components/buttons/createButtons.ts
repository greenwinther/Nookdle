import {
  myFavoritebtnContainer,
  fetchContainer,
  searchMenuContainer,
} from "../containers/createContainers";

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
searchMenuContainer.appendChild(submitSearchButton);

/* Old functions
// Function to create a button for fetching villagers
export const createFetchVillagersButton = (appContainer: HTMLElement) => {
  const button = document.createElement("button");
  button.textContent = "Load Villagers";
  button.classList.add("fetch-villagers-btn");
  appContainer.appendChild(button);
  return button;
};

// Function to create a button for fetching bugs
export const createFetchBugsButton = (appContainer: HTMLElement) => {
  const button = document.createElement("button");
  button.textContent = "Load Bugs";
  button.classList.add("fetch-bugs-btn");
  appContainer.appendChild(button);
  return button;
};

// Function to create a button for fetching fish
export const createFetchFishButton = (appContainer: HTMLElement) => {
  const button = document.createElement("button");
  button.textContent = "Load Fish";
  button.classList.add("fetch-fish-btn");
  appContainer.appendChild(button);
  return button;
}; */
