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
import { appContainer } from "../data/variable";

export const createFetchButton = (
  appContainer: HTMLElement,
  label: string,
  className: string
) => {
  const button = document.createElement("button");
  button.textContent = label;
  button.classList.add(className);
  appContainer.appendChild(button);
  return button;
};

export const villagersButton = createFetchButton(
  appContainer,
  "Load Villagers",
  "fetch-villagers-btn"
);
export const bugsButton = createFetchButton(
  appContainer,
  "Load Bugs",
  "fetch-bugs-btn"
);
export const fishButton = createFetchButton(
  appContainer,
  "Load Fish",
  "fetch-fish-btn"
);
