import { Villager } from "../../types/villager";

export type SuggestionsElement = HTMLDivElement & {
  renderSuggestions: (villagers: Villager[]) => void;
};

export const createSuggestions = (
  onSelect: (name: string) => void
): SuggestionsElement & {
  renderSuggestions: (filteredVillagers: Villager[]) => void;
} => {
  const suggestionsDiv = document.createElement("div");
  suggestionsDiv.id = "suggestions";
  suggestionsDiv.style.display = "none"; // Hide the suggestions div initially

  const renderSuggestions = (filteredVillagers: Villager[]) => {
    if (filteredVillagers.length === 0) {
      suggestionsDiv.style.display = "none"; // Hide if no suggestions
    } else {
      suggestionsDiv.style.display = "block"; // Show if there are suggestions
    }

    suggestionsDiv.innerHTML = ""; // Clear previous suggestions
    filteredVillagers.forEach((villager) => {
      const suggestionItem = document.createElement("div");
      suggestionItem.textContent = villager.name;
      suggestionItem.addEventListener("click", () => {
        onSelect(villager.name); // Call the onSelect callback with the selected name
      });
      suggestionsDiv.appendChild(suggestionItem);
    });
  };

  // Expose the renderSuggestions function
  return Object.assign(suggestionsDiv, { renderSuggestions });
};
