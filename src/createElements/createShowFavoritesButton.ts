export const createShowFavoritesButton = (): HTMLButtonElement => {
  const button = document.createElement("button");
  button.className = "favoriteBtn";
  button.textContent = "Show Favorite";
  return button;
};

export const favoriteButton = createShowFavoritesButton();
