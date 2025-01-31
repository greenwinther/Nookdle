import type {
  NookipediaVillager,
  NookipediaBugs,
  NookipediaFish,
} from "./types/types";

export const savedVillagers: NookipediaVillager[] = [];
export const savedFish: NookipediaFish[] = [];
export const savedBugs: NookipediaBugs[] = [];

// Function which creates a searchfield and attaches it to a container
export const createSearchField = () => {
  // Create Search field container
  const container = document.createElement("div");
  container.className = "search-container";

  // Create Search field
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search villagers...";
  searchInput.className = "search-input";

  container.append(searchInput);

  return {
    container,
    searchInput,
  };
};

// Functions which creates the sorting buttons
export const createSortButtons = () => {
  // Create Button Container
  const container = document.createElement("div");
  container.className = "sort-buttons";

  // Button state
  const buttonsConfig = [
    { key: "name", label: "Name" },
    { key: "species", label: "Species" },
    { key: "personality", label: "Personality" },
    { key: "gender", label: "Gender" },
    { key: "birthday", label: "Birthday" },
  ];

  // Create buttons
  buttonsConfig.forEach(({ key, label }) => {
    const button = document.createElement("button");
    button.className = "sort-button";
    button.dataset.sortKey = key;
    button.dataset.direction = "asc";
    button.innerHTML = `
        ${label} 
        <span class="arrow">↑</span>
      `;

    container.appendChild(button);
  });

  return container;
};

// Creates the loading screen element
export const createLoadingElement = (): HTMLDivElement => {
  const loading = document.createElement("div");
  loading.className = "loading";
  loading.textContent = "Please give it a sec...";
  return loading;
};

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
