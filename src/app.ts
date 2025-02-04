import { setupMainUI, setupHeaderUI } from "./ui";
import { mainContainer, headerContainer } from "./data/dom";
/* import { updateDisplay } from "./updateDisplay";
import { handleSearchUpdate } from "./events/debouncer"; */
import { setupButtonEvents } from "./events/fetchButtonEvent";
/* import { setupFavoriteButton } from "./events/setupFavoriteButton";
import { setupSortButtons } from "./events/sortButtonEvent"; */
import { favoriteButton } from "./createElements/createShowFavoritesButton";
import {
  cardContainer,
  fetchContainer,
} from "./createElements/createContainer";
import { searchfield } from "./createElements/createSearchField";
import { sortButtons } from "./createElements/createSortButtons";
import { showFavorites } from "./events/saveCardAsFavorite";

export const initApp = async () => {
  setupMainUI(
    mainContainer,
    searchfield,
    sortButtons,
    fetchContainer,
    cardContainer
  );

  setupHeaderUI(headerContainer, favoriteButton);

  setupButtonEvents();
  favoriteButton.addEventListener("click", showFavorites);
};
/*   setupSortButtons(
    sortButtons,
    searchfield,
    updateDisplay,
    currentSort,
    showFavorite
  );

  setupFavoriteButton(
    favoriteButton,
    searchfield,
    updateDisplay,
    currentSort,
    showFavorite
  );

  // Handle search input event for searching villagers
  searchfield.searchInput.addEventListener("input", () => {
    handleSearchUpdate(searchfield, updateDisplay, currentSort, showFavorite);
  }); */
