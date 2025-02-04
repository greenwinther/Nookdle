import { setupMainUI, setupHeaderUI } from "./ui/ui";
import { mainContainer, headerContainer } from "./data/dom";
/* import { updateDisplay } from "./updateDisplay";
import { handleSearchUpdate } from "./events/debouncer"; */
import { setupButtonEvents } from "./events/fetchButtonEvent/fetchButtonEvent";
/* import { setupFavoriteButton } from "./events/setupFavoriteButton";
import { setupSortButtons } from "./events/sortButtonEvent"; */
import { myFavoriteButton } from "./components/buttons/createButtons";
import {
  cardContainer,
  fetchContainer,
  searchContainer,
} from "./components/containers/createContainers";
import { sortButtons } from "./components/buttons/createSortButtons";
import { showFavorites } from "./events/saveCard/saveCardAsFavorite";
import { createSearchField } from "./components/searchfield/createSearchField";
import { filterCardsByName } from "./events/searchFilter/searchFilter";
import { myFavoritebtnContainer } from "./components/containers/createContainers";

export const initApp = async () => {
  setupMainUI(
    mainContainer,
    searchContainer,
    sortButtons,
    fetchContainer,
    cardContainer
  );

  setupHeaderUI(headerContainer, myFavoritebtnContainer);

  setupButtonEvents();
  myFavoriteButton.addEventListener("click", showFavorites);
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
