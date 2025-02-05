import { allVillagers } from "../../events/fetchDataEvent/fetchData";
import type { NookipediaVillager } from "../../types/types";

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
  group.className = `filter-group filter-${type.toLowerCase()}`;
  group.innerHTML = `<h4>${type}</h4>`;

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
};

// Function to initialize the checkboxes
export const initializeFilters = (checkboxContainer: HTMLDivElement) => {
  // Create checkbox groups directly and append them to checkboxContainer
  createCheckboxGroup("Species", getUniqueValues("species"), checkboxContainer);
  createCheckboxGroup(
    "Personality",
    getUniqueValues("personality"),
    checkboxContainer
  );
  createCheckboxGroup("Gender", getUniqueValues("gender"), checkboxContainer);
};

// This function filters the displayed villager cards based on the selected checkboxes for species, personality, and gender.
export const filterVillagers = () => {
  // Get the list of selected target checkboxes that are checked and map their values into an array
  const selectedSpecies = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".filter-species .active")
  ).map((btn) => btn.dataset.value!);

  const selectedPersonalities = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".filter-personality .active")
  ).map((btn) => btn.dataset.value!);

  const selectedGenders = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".filter-gender .active")
  ).map((btn) => btn.dataset.value!);

  // Loop through all villager cards and filter them based on the selected criteria
  document
    .querySelectorAll<HTMLDivElement>(".villager-card")
    .forEach((card) => {
      // Get the targets information from the first paragraph in the card details
      // Get the tagets info from the first paragraph
      // Split the text by ": " and get the second part (target)
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

      // Check if the targets selected is part of the filter or if no target is selected (all should be included)
      const speciesMatch =
        selectedSpecies.length === 0 || selectedSpecies.includes(species);

      const personalityMatch =
        selectedPersonalities.length === 0 ||
        selectedPersonalities.includes(personality);

      const genderMatch =
        selectedGenders.length === 0 || selectedGenders.includes(gender);

      // Set the display of the card based on whether it matches the selected filters
      // If all conditions match, show the card, otherwise hide it
      card.style.display =
        speciesMatch && personalityMatch && genderMatch ? "block" : "none";
    });
};
