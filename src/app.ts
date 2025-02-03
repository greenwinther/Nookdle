import { setupMainUI, setupHeaderUI } from "./ui";
import {
  searchfield,
  sortButtons,
  villagersContainer,
  bugsContainer,
  fishContainer,
  currentSort,
  showingSaved,
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
  bugsButton,
  fishButton,
  villagersButton,
} from "./createElements/createFetchButton";

export const initApp = async () => {
  setupMainUI(
    mainContainer,
    searchfield,
    sortButtons,
    villagersContainer,
    bugsContainer,
    fishContainer,
    villagersButton,
    bugsButton,
    fishButton
  );

  setupHeaderUI(headerContainer, favoriteButton);

  setupButtonEvents();

  setupSortButtons(
    sortButtons,
    searchfield,
    updateDisplay,
    currentSort,
    showingSaved
  );

  setupFavoriteButton(
    favoriteButton,
    searchfield,
    updateDisplay,
    currentSort,
    showingSaved
  );

  // Handle search input event for searching villagers
  searchfield.searchInput.addEventListener("input", () => {
    handleSearchUpdate(searchfield, updateDisplay, currentSort, showingSaved);
  });
};
