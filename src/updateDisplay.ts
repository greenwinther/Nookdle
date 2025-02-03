import { filterBugs, filterFish, filterVillagers } from "./utils";
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
  updateVillagerDisplay(searchTerm, sortBy, onlySaved);
  updateFishDisplay(searchTerm, onlySaved);
  updateBugsDisplay(searchTerm, onlySaved);
};
