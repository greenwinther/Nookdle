import { filterBugs, filterFish, filterVillagers } from "./filter";
import type { SortableField } from "./types/types";
import { currentSort } from "./data/variable";
import { updateSortButtons } from "./events/sortButtonEvent";

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
  sortBy: SortableField = currentSort,
  onlySaved: boolean = false
) => {
  filterFish(searchTerm, onlySaved);
  updateSortButtons(sortBy);
};

export const updateBugsDisplay = (
  searchTerm = "",
  sortBy: SortableField = currentSort,
  onlySaved: boolean = false
) => {
  filterBugs(searchTerm, onlySaved);
  updateSortButtons(sortBy);
};

export const updateDisplay = (
  searchTerm = "",
  sortBy: SortableField = currentSort,
  onlySaved: boolean = false
) => {
  updateVillagerDisplay(searchTerm, sortBy, onlySaved);
  updateFishDisplay(searchTerm, sortBy, onlySaved);
  updateBugsDisplay(searchTerm, sortBy, onlySaved);
};
