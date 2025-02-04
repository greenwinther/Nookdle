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
  searchContainer,
} from "./createElements/createContainer";
import { sortButtons } from "./createElements/createSortButtons";
import { showFavorites } from "./events/saveCardAsFavorite";
import { createSearchField } from "./createElements/createSearchField";
import { filterCardsByName } from "./filter";

export const initApp = async () => {
  setupMainUI(
    mainContainer,
    searchContainer,
    sortButtons,
    fetchContainer,
    cardContainer
  );

  setupHeaderUI(headerContainer, favoriteButton);

  setupButtonEvents();
  favoriteButton.addEventListener("click", showFavorites);
  const searchInput = createSearchField(searchContainer);
  filterCardsByName(searchInput, cardContainer);
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
