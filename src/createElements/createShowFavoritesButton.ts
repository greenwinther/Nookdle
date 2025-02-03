export const createShowFavoritesButton = (): HTMLButtonElement => {
  const button = document.createElement("button");
  button.className = "favoriteBtn";
  button.textContent = "Show Favorite";
  button.classList.add("sort-button");
  return button;
};

export const favoriteButton = createShowFavoritesButton();
