import { favorites } from "../createElements/createCard";
import type { NookipediaData } from "../types/types";

// Add the event listener to the entire card
export const saveCardAsFavorite = (card: HTMLElement, data: NookipediaData) => {
  const saveButton = card.querySelector(".save-button") as HTMLButtonElement;

  // Check if the item is already saved
  const isSaved = favorites.some((item) => item.name === data.name);

  // Set the heart icon based on whether it's saved
  saveButton.textContent = isSaved ? `❤️` : `♡`;

  // Toggle between adding/removing from saved and change heart icon
  card.addEventListener("click", () => {
    const index = favorites.findIndex((item) => item.name === data.name);

    if (index !== -1) {
      // Remove from saved
      favorites.splice(index, 1);
      saveButton.textContent = "♡"; // Empty heart
    } else {
      // Add to saved
      favorites.push(data);
      saveButton.textContent = "❤️"; // Filled heart
    }
  });
};
