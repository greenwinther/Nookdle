import type { NookipediaCharacter } from "./types/villager";

export const createSearchControls = () => {
  const container = document.createElement("div");
  container.className = "controls";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search villagers...";
  searchInput.className = "search-input";

  const sortSelect = document.createElement("select");
  sortSelect.className = "sort-select";

  const sortOptions = [
    { value: "name", text: "Sort by Name" },
    { value: "species", text: "Sort by Species" },
    { value: "personality", text: "Sort by Personality" },
    { value: "birthday_month", text: "Sort by Birthday" },
  ];

  sortOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    sortSelect.appendChild(optionElement);
  });

  container.append(searchInput, sortSelect);

  return {
    container,
    searchInput,
    sortSelect,
  };
};

export const createVillagerCard = (villager: NookipediaCharacter) => {
  const card = document.createElement("div");
  card.className = "villager-card";

  const image = document.createElement("img");
  image.src = villager.image_url;
  image.alt = villager.name;
  image.style.borderColor = villager.title_color;

  const name = document.createElement("h3");
  name.textContent = villager.name;
  name.style.color = villager.title_color;

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
