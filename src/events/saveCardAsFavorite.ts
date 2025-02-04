import type { NookipediaData } from "../types/types";
import {
  bugsContainer,
  cardContainer,
  favoritesContainer,
  fishContainer,
  villagersContainer,
} from "../createElements/createContainer";
import { createCard } from "../createElements/createCard";

export const favorites: Array<{
  data: NookipediaData;
  type: "villager" | "bug" | "fish";
}> = [];

// Add the event listener to the entire card
export const saveCardAsFavorite = (
  card: HTMLElement,
  data: NookipediaData,
  type: "villager" | "bug" | "fish"
) => {
  const saveButton = card.querySelector(".save-button") as HTMLButtonElement;

  // Check if the item is already saved
  const isSaved = favorites.some((item) => item.data.name === data.name);

  // Set the heart icon based on whether it's saved
  saveButton.textContent = isSaved ? `❤️` : `♡`;

  // Toggle between adding/removing from favorites
  card.addEventListener("click", () => {
    const index = favorites.findIndex((item) => item.data.name === data.name);
    if (index !== -1) {
      // Remove from favorites
      favorites.splice(index, 1);
      saveButton.textContent = "♡";
    } else {
      // Add to favorites with type info
      favorites.push({ data, type });
      saveButton.textContent = "❤️";
    }
  });
};

/* export let showingFavorites: boolean = false; */

export const showFavorites = () => {
  // Clear the favorites container first
  favoritesContainer.innerHTML = "";
  villagersContainer.innerHTML = "";
  bugsContainer.innerHTML = "";
  fishContainer.innerHTML = "";
  // Loop through the favorites array and create a card for each item
  favorites.forEach((favorite) => {
    // Use the type from favorites
    const card = createCard(favorite.data, favorite.type);
    // Append the card to the favorites container
    favoritesContainer.appendChild(card);
  });
  cardContainer.appendChild(favoritesContainer);
};
