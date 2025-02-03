import { setupMainUI, setupHeaderUI } from "./ui";
import {
  searchfield,
  sortButtons,
  currentSort,
  onlySaved,
  mainContainer,
  headerContainer,
} from "./data/variable";
import { updateDisplay } from "./updateDisplay";
import { handleSearchUpdate } from "./events/debouncer";
import { setupButtonEvents } from "./events/fetchButtonEvent";
import { setupFavoriteButton } from "./events/setupFavoriteButton";
import { setupSortButtons } from "./events/sortButtonEvent";
import { favoriteButton } from "./data/variable";
import {
  cardContainer,
  fetchContainer,
} from "./createElements/createContainer";

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

  setupSortButtons(
    sortButtons,
    searchfield,
    updateDisplay,
    currentSort,
    onlySaved
  );

  setupFavoriteButton(
    favoriteButton,
    searchfield,
    updateDisplay,
    currentSort,
    onlySaved
  );

  // Handle search input event for searching villagers
  searchfield.searchInput.addEventListener("input", () => {
    handleSearchUpdate(searchfield, updateDisplay, currentSort, onlySaved);
  });
};
