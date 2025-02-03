import { filterBugs, filterFish, filterVillagers } from "./filter";
import type { SortableField } from "./types/types";
import { currentSort } from "./data/variable";
import { updateSortButtons } from "./events/sortButtonEvent";
import { cardContainer } from "./createElements/createContainer";

export const updateVillagerDisplay = (
  searchTerm = "",
  sortBy: SortableField = currentSort,
  onlySaved: boolean = false
) => {
  filterVillagers(searchTerm, sortBy, onlySaved);
  // Update the sort buttons
  updateSortButtons(sortBy);
};

export const updateFishDisplay = (
  searchTerm = "",
  onlySaved: boolean = false
) => {
  filterFish(searchTerm, onlySaved);
};

export const updateBugsDisplay = (
  searchTerm = "",
  onlySaved: boolean = false
) => {
  filterBugs(searchTerm, onlySaved);
};

export const updateDisplay = (
  searchTerm = "",
  sortBy: SortableField = currentSort,
  onlySaved: boolean = false
) => {
  cardContainer.innerHTML = "";
  updateVillagerDisplay(searchTerm, sortBy, onlySaved);
  updateFishDisplay(searchTerm, onlySaved);
  updateBugsDisplay(searchTerm, onlySaved);
};
