import { allVillagers } from "../../events/fetchDataEvent/fetchData";
import type { NookipediaVillager } from "../../types/types";
import {
  speciesContainer,
  personalityContainer,
  genderContainer,
} from "../containers/createContainers";

// Extracts unique values for a specified villager attribute (species, personality, or gender).
const getUniqueValues = (
  // Restrict the key parameter to only "species", "personality", or "gender"
  key: Extract<keyof NookipediaVillager, "species" | "personality" | "gender">
): string[] => {
  const values = allVillagers
    // Extract the values for the specified key from each villager
    .map((villager) => villager[key])
    // Ensure only string values are kept
    .filter((value): value is string => typeof value === "string");

  // Remove duplicate values and return as an array
  return [...new Set(values)];
};

// Function to create a checkbox group
const createCheckboxGroup = (
  type: string,
  values: string[],
  container: HTMLDivElement
) => {
  const group = document.createElement("div");
  group.classList.add(`filter-${type.toLowerCase()}`);
  const groupName = document.createElement("div");
  groupName.classList.add(`${type.toLowerCase()}`);
  groupName.innerHTML = `<h4>${type}</h4>`;

  values.forEach((value) => {
    const button = document.createElement("button");
    button.textContent = value;
    button.classList.add("filter-button");
    button.dataset.value = value;

    // Toggle active class on click
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      // Re-filter villagers based on selection
      filterVillagers();
    });

    group.appendChild(button);
  });

  container.appendChild(group);
  container.appendChild(groupName);
};

// Function to initialize the checkboxes
export const initializeFilters = () => {
  // Create checkbox groups directly and append them to checkboxContainer
  createCheckboxGroup("Species", getUniqueValues("species"), speciesContainer);
  createCheckboxGroup(
    "Personality",
    getUniqueValues("personality"),
    personalityContainer
  );
  createCheckboxGroup("Gender", getUniqueValues("gender"), genderContainer);
};

export const filterVillagers = () => {
  const searchInput = document.querySelector<HTMLInputElement>(".search-input");
  const searchText = searchInput?.value.toLowerCase() || "";

  const selectedSpecies = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".filter-species .active")
  ).map((btn) => btn.dataset.value);

  const selectedPersonalities = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".filter-personality .active")
  ).map((btn) => btn.dataset.value);

  const selectedGenders = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".filter-gender .active")
  ).map((btn) => btn.dataset.value);

  document
    .querySelectorAll<HTMLDivElement>(".villager-card")
    .forEach((card) => {
      const name = card.getAttribute("data-name") || "";
      const species =
        card
          .querySelector(".details p:nth-child(1)")
          ?.textContent?.split(": ")[1] || "";
      const personality =
        card
          .querySelector(".details p:nth-child(2)")
          ?.textContent?.split(": ")[1] || "";
      const gender =
        card
          .querySelector(".details p:nth-child(3)")
          ?.textContent?.split(": ")[1] || "";

      // Apply both filters together:
      const nameMatch = searchText === "" || name.startsWith(searchText);
      const speciesMatch =
        selectedSpecies.length === 0 || selectedSpecies.includes(species);
      const personalityMatch =
        selectedPersonalities.length === 0 ||
        selectedPersonalities.includes(personality);
      const genderMatch =
        selectedGenders.length === 0 || selectedGenders.includes(gender);

      // Show or hide the card based on all conditions
      card.style.display =
        nameMatch && speciesMatch && personalityMatch && genderMatch
          ? "block"
          : "none";
    });
};
