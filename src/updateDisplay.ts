/* import {
  filterEntities,
  createVillagerComparator,
  isBug,
  isFish,
  isVillager,
} from "./filter";
import type { SortableField } from "./types/types";
import { currentSort } from "./data/dom";
import { updateSortButtons } from "./events/sortButtonEvent";
import { cardContainer } from "./createElements/createContainer";
import { allBugs, allFish, allVillagers } from "./scripts/fetchVillagers";
import {
  createVillagerCard,
  createBugCard,
  createFishCard,
} from "./createElements/createCard"; */

/* export const updateVillagerDisplay = (
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
}; */
