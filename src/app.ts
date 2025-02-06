import { setupMainUI, setupHeaderUI } from "./ui/ui";
import { mainContainer, headerContainer } from "./data/dom";
import { setupButtonEvents } from "./events/fetchButtonEvent/fetchButtonEvent";
import {
  myFavoriteButton,
  submitSearchButton,
  filterButton,
} from "./components/buttons/createButtons";
import {
  cardContainer,
  fetchContainer,
  searchMenuContainer,
  myFavoritebtnContainer,
  filterContainer,
  searchContainer,
  checkboxContainer,
} from "./components/containers/createContainers";
import { showFavorites } from "./events/saveCard/saveCardAsFavorite";
import { filterCardsByName } from "./events/searchFilter/searchFilter";
import { searchInput } from "./components/searchfield/createSearchField";
import { fetchVillagerByName } from "./events/fetchDataEvent/fetchData";
import { filterVillagers } from "./components/checkboxes/checkboxes";
import { toggleFilters } from "./events/searchFilter/filterButton";

export const initApp = async () => {
  setupMainUI(mainContainer, fetchContainer, searchContainer, cardContainer);

  setupHeaderUI(headerContainer, myFavoritebtnContainer, searchMenuContainer);

  setupButtonEvents();
  myFavoriteButton.addEventListener("click", showFavorites);

  submitSearchButton.addEventListener("click", () => {
    const villagerName = (searchInput as HTMLInputElement).value.trim();
    fetchVillagerByName(villagerName);
  });

  filterCardsByName(searchInput, cardContainer);

  // Initialize filter button toggle functionality
  toggleFilters(filterButton, filterContainer, checkboxContainer);
  // Attach event listeners to checkboxes
  document.addEventListener("change", () => filterVillagers());
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
