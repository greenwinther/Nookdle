import type {
  NookipediaVillager,
  NookipediaBugs,
  NookipediaFish,
  SortableField,
} from "./types/types";
import { allVillagers, allBugs, allFish } from "./scripts/fetchVillagers";
import { savedBugs, savedFish, savedVillagers } from "./data/variable";
import {
  createBugCard,
  createFishCard,
  createVillagerCard,
} from "./createElements/createCard";
import { cardContainer } from "./createElements/createContainer";

// Function which filters and displays villagers based on search term, sorting, and saved status
export const filterVillagers = (
  searchTerm: string,
  sortBy: SortableField,
  onlySaved: boolean = false
): NookipediaVillager[] => {
  if (!cardContainer) return [];
  cardContainer.innerHTML = "";

  // Determines which villager-list will be displayed: saved or all
  const villagersToDisplay = onlySaved ? savedVillagers : allVillagers;

  // Filter the villagers based on the search term and sort order
  const filtered = getFilteredVillagers(searchTerm, sortBy, villagersToDisplay);

  // Create and append cards for each filtered villager
  filtered.forEach((villager) => {
    cardContainer.appendChild(createVillagerCard(villager));
  });

  return filtered;
};

// Function which filters and sorts villagers based on search term and sort order
export const getFilteredVillagers = (
  searchTerm: string,
  sortBy: SortableField,
  villagers: NookipediaVillager[] = allVillagers
): NookipediaVillager[] => {
  // Clone the original array to avoid modifying the source
  let filteredVillagers = [...villagers];

  // Search filter, finds villagers whose names starts with the search term
  if (searchTerm) {
    const lowerSearch = searchTerm.toLowerCase();
    filteredVillagers = filteredVillagers.filter((villager) =>
      villager.name.toLowerCase().startsWith(lowerSearch)
    );
  }

  // Destructuring sortBy string into two parts ("birthday-asc" → ["birthday", "asc"])
  // This splits sortBy into a sortKey ("birthday") and sortDirection ("asc" or "desc")
  const [sortKey, sortDirection] = sortBy.split("-") as [
    string,
    "asc" | "desc"
  ];

  // Sort the filtered villagers array based on the selected criteria
  filteredVillagers.sort((a, b) => {
    // Set starting point at 0
    let comparison = 0;

    // If sorting by birthday, use month and day to compare
    if (sortKey === "birthday") {
      // An array of birthmonth
      const monthOrder = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // Create a varialbe which finds the index of the month for each villager
      const aMonth = monthOrder.indexOf(a.birthday_month);
      const bMonth = monthOrder.indexOf(b.birthday_month);
      // Compare months first, then compare the days if the months are the same
      comparison =
        aMonth - bMonth || parseInt(a.birthday_day) - parseInt(b.birthday_day);
    } else {
      // Declare a variable for the other keys and compare their strings ("name", "species")
      const aValue = a[sortKey as keyof NookipediaVillager] as string;
      const bValue = b[sortKey as keyof NookipediaVillager] as string;
      // Compare the two strings alphabetically. If a comes before b, return negative
      comparison = aValue.localeCompare(bValue);
    }
    // If SortDirection is "desc", it reverses the order
    return sortDirection === "desc" ? comparison * -1 : comparison;
  });

  return filteredVillagers;
};

export const filterFish = (
  searchTerm: string,
  onlySaved: boolean = false
): NookipediaFish[] => {
  if (!cardContainer) return [];
  cardContainer.innerHTML = "";

  const fishToDisplay = onlySaved ? savedFish : allFish;

  const filteredFish = getFilteredFish(searchTerm, fishToDisplay);

  filteredFish.forEach((fish) => {
    cardContainer.appendChild(createFishCard(fish));
  });
  return filteredFish;
};

export const getFilteredFish = (
  searchTerm: string,
  fish: NookipediaFish[] = allFish
): NookipediaFish[] => {
  let filteredFish = [...fish];

  if (searchTerm) {
    const lowerSearch = searchTerm.toLowerCase();
    filteredFish = filteredFish.filter((fish) => {
      return fish.name.toLowerCase().startsWith(lowerSearch);
    });
  }
  return filteredFish;
};

export const filterBugs = (
  searchTerm: string,
  onlySaved: boolean = false
): NookipediaBugs[] => {
  if (!cardContainer) return [];
  cardContainer.innerHTML = "";

  const bugsToDisplay = onlySaved ? savedBugs : allBugs;
  const filteredBugs = getFilteredBugs(searchTerm, bugsToDisplay);

  filteredBugs.forEach((bug) => {
    cardContainer.appendChild(createBugCard(bug));
  });
  return filteredBugs;
};

export const getFilteredBugs = (
  searchTerm: string,
  bugs: NookipediaBugs[] = allBugs
): NookipediaBugs[] => {
  let filteredBugs = [...bugs];

  if (searchTerm) {
    const lowerSearch = searchTerm.toLowerCase();
    filteredBugs = filteredBugs.filter((bugs) => {
      return bugs.name.toLowerCase().startsWith(lowerSearch);
    });
  }
  return filteredBugs;
};
