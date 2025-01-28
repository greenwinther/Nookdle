import { NookipediaCharacter } from "./types/villager";

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
      <p>Birthday: ${villager.birthday_month} ${villager.birthday_day}</p>
      <p>Catchphrase: "${villager.phrase}"</p>
    `;

  card.append(image, name, details);
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
  loading: HTMLDivElement,
  villagersContainer: HTMLDivElement
) => {
  appContainer.append(
    searchfield.container,
    sortButtons,
    loading,
    villagersContainer
  );
};
