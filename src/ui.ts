import type {
  NookipediaCharacter,
  NookipediaBugs,
  NookipediaFish,
} from "./types/types";

export const savedVillagers: NookipediaCharacter[] = [];
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

// Functions which creates the villager cards
export const createVillagerCard = (villager: NookipediaCharacter) => {
  // Create Card container
  const card = document.createElement("div");
  card.className = "villager-card";

  // Create Image
  const image = document.createElement("img");
  image.src = villager.image_url;
  image.alt = villager.name;
  image.style.borderColor = villager.title_color;

  // Create Name
  const name = document.createElement("h3");
  name.textContent = villager.name;
  name.style.color = villager.title_color;

  // Create Details
  const details = document.createElement("div");
  details.className = "details";
  details.innerHTML = `
      <p>Species: ${villager.species}</p>
      <p>Personality: ${villager.personality}</p>
      <p>Gender: ${villager.gender}</p>
      <p>Birthday: ${villager.birthday_month} ${villager.birthday_day}</p>
      <p>Catchphrase: "${villager.phrase}"</p>
    `;

  // Create Save button
  const saveButton = document.createElement("button");
  saveButton.className = "save-button";

  // Check if the villager is already saved
  const isSaved = savedVillagers.some((v) => v.id === villager.id);
  saveButton.textContent = isSaved ? "Remove from Saved" : "Save Villager";

  // Find the index of the villager in the savedVillagers array
  saveButton.addEventListener("click", () => {
    const index = savedVillagers.findIndex((v) => v.id === villager.id);

    // Villager is saved, remove it |  Villager is not saved, add it
    if (index !== -1) {
      savedVillagers.splice(index, 1);
      saveButton.textContent = "Save Villager";
    } else {
      savedVillagers.push(villager);
      saveButton.textContent = "Remove from Saved";
    }
  });

  // Append all elements to the card
  card.append(image, name, details, saveButton);
  return card;
};

export const createFishCard = (fish: NookipediaFish) => {
  // Create Card container
  const card = document.createElement("div");
  card.className = "fish-card";

  // Create Image
  const image = document.createElement("img");
  image.src = fish.image_url; // Assuming fish has an image_url
  image.alt = fish.name;

  // Create Name
  const name = document.createElement("h3");
  name.textContent = fish.name;

  // Create Rarity
  const rarity = document.createElement("p");
  rarity.textContent = `Rarity: ${fish.rarity}`;

  // Create Save button
  const saveButton = document.createElement("button");
  saveButton.className = "save-button";

  // Check if the fish is already saved
  const isSaved = savedFish.some((f) => f.name === fish.name);
  saveButton.textContent = isSaved ? "Remove from Saved" : "Save Fish";

  // Find the index of the fish in the savedFish array
  saveButton.addEventListener("click", () => {
    const index = savedFish.findIndex((f) => f.name === fish.name);

    // Fish is saved, remove it | Fish is not saved, add it
    if (index !== -1) {
      savedFish.splice(index, 1);
      saveButton.textContent = "Save Fish";
    } else {
      savedFish.push(fish);
      saveButton.textContent = "Remove from Saved";
    }
  });

  // Append all elements to the card
  card.append(image, name, rarity, saveButton);
  return card;
};

export const createBugCard = (bug: NookipediaBugs) => {
  // Create Card container
  const card = document.createElement("div");
  card.className = "bug-card";

  // Create Image
  const image = document.createElement("img");
  image.src = bug.image_url; // Assuming bug has an image_url
  image.alt = bug.name;

  // Create Name
  const name = document.createElement("h3");
  name.textContent = bug.name;

  // Create Rarity
  const rarity = document.createElement("p");
  rarity.textContent = `Rarity: ${bug.rarity}`;

  // Create Save button
  const saveButton = document.createElement("button");
  saveButton.className = "save-button";

  // Check if the bug is already saved
  const isSaved = savedBugs.some((b) => b.name === bug.name);
  saveButton.textContent = isSaved ? "Remove from Saved" : "Save Bug";

  // Find the index of the bug in the savedBugs array
  saveButton.addEventListener("click", () => {
    const index = savedBugs.findIndex((b) => b.name === bug.name);

    // Bug is saved, remove it | Bug is not saved, add it
    if (index !== -1) {
      savedBugs.splice(index, 1);
      saveButton.textContent = "Save Bug";
    } else {
      savedBugs.push(bug);
      saveButton.textContent = "Remove from Saved";
    }
  });

  // Append all elements to the card
  card.append(image, name, rarity, saveButton);
  return card;
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

// Creates the main container for the villagers
export const createVillagersContainer = (): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = "villagers-grid";
  return container;
};

// Creates the main container for bugs
export const createBugsContainer = (): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = "bugs-grid"; // Unique class for styling
  return container;
};

// Creates the main container for fish
export const createFishContainer = (): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = "fish-grid"; // Unique class for styling
  return container;
};

// Creates the loading screen element
export const createLoadingElement = (): HTMLDivElement => {
  const loading = document.createElement("div");
  loading.className = "loading";
  loading.textContent = "Loading villagers...";
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
};
