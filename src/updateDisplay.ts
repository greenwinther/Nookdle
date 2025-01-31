import {
  filterBugs,
  filterFish,
  filterVillagers,
  updateSortButtons,
} from "./utils";
import type { SortableField } from "./types/types";
import { currentSort } from "./variable";

export const updateDisplay = (
  searchTerm = "",
  sortBy: SortableField = currentSort,
  onlySaved: boolean = false
) => {
  // Call the appropriate filter function to populate the grids
  filterBugs(searchTerm, onlySaved); // Should populate the bugs grid
  filterFish(searchTerm, onlySaved); // Should populate the fish grid
  filterVillagers(searchTerm, sortBy, onlySaved); // Should populate the villagers grid

  // Update the sort buttons
  updateSortButtons(sortBy);
};
