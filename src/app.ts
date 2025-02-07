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
  myFavoritebtnContainer,
  filterContainer,
  searchContainer,
  checkboxContainer,
} from "./components/containers/createContainers";
import { showFavorites } from "./events/saveCard/saveCardAsFavorite";
import { filterCardsByName } from "./events/filter/searchFilter";
import { searchInput } from "./components/searchfield/createSearchField";
import { fetchVillagerByName } from "./events/fetchDataEvent/fetchData";
import { toggleFilters } from "./events/filter/toggleFilterButton";

export const initApp = async () => {
  setupMainUI(mainContainer, fetchContainer, searchContainer, cardContainer);

  setupHeaderUI(headerContainer, myFavoritebtnContainer);

  setupButtonEvents();
  myFavoriteButton.addEventListener("click", showFavorites);

  submitSearchButton.addEventListener("click", () => {
    const villagerName = (searchInput as HTMLInputElement).value.trim();
    fetchVillagerByName(villagerName);
  });

  filterCardsByName(searchInput, cardContainer);

  // Initialize filter button toggle functionality
  toggleFilters(filterButton, filterContainer, checkboxContainer);
};
