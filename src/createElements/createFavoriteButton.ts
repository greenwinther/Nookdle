export const createFavoriteButton = (): HTMLButtonElement => {
  const button = document.createElement("button");
  button.className = "favoriteBtn";
  button.textContent = "Show Favorite";
  button.classList.add("sort-button");
  return button;
};
